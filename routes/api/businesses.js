const express = require('express');
const router = express.Router();
const passport = require('passport');
const Business = require('../../models/Business');
const Service = require('../../models/Service');
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
                    tagline: req.body.tagline,
                    reviews: [],
                    rating: [],
                    image: req.body.image
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
    Business.findOneAndUpdate({ _id: req.params.businessId }, req.body, {new: true})
        .then((business) => {
            res.json({
            business: business
             })
        })
        .catch(() => res.json("Oops! Something went wrong! :("))
})

router.delete("/:businessId", passport.authenticate('jwt', {session: false}), (req, res) => {
    // Business.findByIdAndRemove(req.params.businessId)
       Business.findById(req.params.businessId)
       .then(business => {
           business.remove()
        })
    // Business.deleteOne({_id: req.params.businessId})
       .then(() => res.json({business: req.params.businessId}))
})      

router.get("/:businessId", passport.authenticate('jwt', {session: false}), (req, res) => {
    Business.findById(req.params.businessId)
        .populate('services')
        .then(business => {
            res.json({
                business: business
            })
        })
        .catch(() => res.json("Could not find business entry"))
})

module.exports = router;