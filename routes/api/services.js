const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const Category = require('../../models/Category');
const Business = require('../../models/Business');
const Service = require('../../models/Service');
const validateServiceData = require('../../validations/service');
const passport = require('passport');
router.get("/:field/:criteria", passport.authenticate('jwt', {session:false}), (req, res) => {
    let result = {}
    let filter;
    if (req.params.criteria==="none"){
        filter = {}
    } else {
        filter = { [req.params.field]: req.params.criteria }
    }
    Service.find(filter)
    .then(services => {
        services.map(service => 
        result[service._id] = service)
        res.json({services: result})
    })
})

router.get("/:serviceId", passport.authenticate('jwt', {session:false}), (req,res) => {
    Service.findById(req.params.serviceId)
    .then(serv => {
        Business.findById(serv.business)
        .then((bus) =>res.json({service: serv, business: bus}))
    })
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
            business: req.body.business,
            image: req.body.image
        })
        newService.save()
                  .then(service => {
                      Category.findOne({title: req.body.category})
                      .then(category => {
                          category.services.push(service)
                          category.save()
                        })
                    Business.findByIdAndUpdate(req.body.business,
                    {$push: {services: service}})
                      .then(() => res.json({service: service}))
                    //  res.json({ service: response })
                      return res;
                    })
})

router.put("/:serviceId", passport.authenticate('jwt', {session:false}), (req, res) => {
    const {errors, isValid} = validateServiceData(req.body);
    if (!isValid) {
        res.status(400).json(errors);
    }
    Service.findByIdAndUpdate(req.params.serviceId, req.body, {new: true})
    .then(service => {
        res.json({service: service})
    })
})

router.delete("/:serviceId", passport.authenticate('jwt', {session:false}), (req, res)=>{
    Service.findOne({_id: req.params.serviceId})
        .then((service) => {
            service.remove()
            return service
        })
        .then(service => {
            Business.findByIdAndUpdate(service.business,
            {$pull: {services: service._id}}, {new: true}, function(){})
            Category.findOneAndUpdate(service.category,
            {$pull: {services: service._id}}, {new: true}, function(){})
            res.json({service: service})
            }
        )
})

module.exports = router;