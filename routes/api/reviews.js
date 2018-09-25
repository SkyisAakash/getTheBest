const express = require('express')
const router = express.Router();
const User = require('../../models/User');
const Review = require('../../models/Review');
const Service = require('../../models/Service');
const validateReview = require('../../validations/review');
const passport = require('passport');
router.post("/register", passport.authenticate('jwt', {session: false}), (req, res) => {
    const {errors, isValid} = validateReview(req.body);
    if (!isValid) {
        res.status(400).json(errors);
    }
    newReview = new Review({
        serviceId: req.body.service,
        businessId: req.body.business,
        reviewer: req.body.reviewer,
        rating: req.body.rating,
        reviewDetails: req.body.details
    })
    newReview.save()
        .then(review => {
            User.findById(req.body.reviewer)
            .then(reviewer => reviewer.reviews.push(review))
            Service.findByIdAndUpdate(req.body.service,
                { $push: { reviews: review } })
            .then(() => res.json({review: review}))
        })
})

router.get("/:type/:id", passport.authenticate('jwt', {session: false}), (req, res) => {
    console.log(req.params.type)
    console.log(req.params.id)
    if (req.params.type==='service') {
        Service.findById(req.params.id)
        .then(service => Review.find({_id: {$in: service.reviews}}))
        .then(reviews => {
            let ans = {}
            reviews.map(review => {
                ans[review._id]= review
            })
            res.json({reviews: ans})
        })
    }
})

module.exports = router;