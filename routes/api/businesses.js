const express = require('express');
const router = express.Router();
const passport = require('passport');
const Business = require('../../models/Business');
const validateBusinessInput = require('../../validations/business');

router.post("/register", passport.authenticate('jwt', {session: false}), (req, res) => {
    // console.log("business route")
    const { errors, isValid } = validateBusinessInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    Business.findOne({title: req.body.title})
        .then(business => {
            if(business) {
                res.status(400).json({title: "This title is taken"})
            } else {
                const newBusiness = new Business({
                    title: req.body.title,
                    services: [],
                    address: req.body.address,
                    owner: req.body.owner,
                    businessHoursStart: req.body.businessHoursStart,
                    businessHoursEnd: req.body.businessHoursEnd,
                    reviews: [],
                    rating: []
                })
                newBusiness.save()
                    .then(business => {
                        res.json({
                            business: business
                        });
                    })
            }
        })
})

router.put("/:businessId", passport.authenticate('jwt', { session: false}), (req, res) => {
    const { errors, isValid } = validateBusinessInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    Business.findOneAndUpdate({ id: req.params.businessId }, req.body, {new: true})
        .then((business) => res.json({
            business: business
        }))
        .catch(() => res.json("Oops! Something went wrong! :("))
})

router.delete("/:businessId", passport.authenticate('jwt', {session: false}), (req, res) => {
    Business.deleteOne({_id: req.params.businessId})
        .then(() => res.json({business: req.id}))
})


module.exports = router;