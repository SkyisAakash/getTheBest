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
    // console.log(req.body);
    const {errors, isValid} = validateServiceData(req.body);
    if (!isValid) {
        res.status(400).json(errors);
    }
    let business = Business.findById(req.business);
    console.log(business);
    // if(business.services.includes(req.title)) {
    //     res.status(400).json({title: "You already have a service registered with this title for your business"});
    // } else {
        newService = new Service({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            address: req.body.address,
            owner: req.body.owner,
            Category: req.body.category,
            business: req.body.business
        })
        newService.save()
                  .then(service => {
                      let category = Category.findOne({title: req.body.category});
                      Promise.all([category.services.push(service),
                      business.services.push(service)])
                      .then(() => res.json({service: service}))
                      
                  })
    // }
})

module.exports = router;