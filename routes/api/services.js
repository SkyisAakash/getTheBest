const express = require('express')
const router = express.Router();
const Category = require('../../models/Category');
const Business = require('../../models/Business');
const Service = require('../../models/Service');
const validateServiceData = require('../../validations/service');
const passport = require('passport');
router.get("/", passport.authenticate('jwt', {session:false}), (req, res) => {
    res.json("services route ois working");
})

router.post("/register", passport.authenticate('jwt', {session: false}), (req, res) => {
    const {errors, isValid} = validateServiceData(req.body);
    if (!isValid) {
        res.status(400).json(errors);
    }
        newService = new Service({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            address: req.body.address,
            owner: req.body.owner,
            category: req.body.category,
            business: req.body.business
        })
        newService.save()
                  .then(service => {
                      Category.findOne({title: req.body.category})
                      .then(category => category.services.push(service))
                      .then(() => Business.findById(req.body.business))
                      .then(business => business.services.push(service))
                      .then(() => res.json({service: service}))
                      .catch((err) => console.log(err))
                    })
                  })

module.exports = router;