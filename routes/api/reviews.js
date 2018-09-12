const express = require('express')
const router = express.Router();
const User = require('../../models/User');
const Review = require('../../models/Review');
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
            User.findById(re.body.reviewer)
            .then(reviewer => reviewer.reviews.push(review))
            return review
        })
})

module.exports = router;