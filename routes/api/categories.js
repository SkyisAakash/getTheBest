const express = require('express')
const router = express.Router();
const passport = require('passport');
const Category = require('../../models/Category');

router.get("/", passport.authenticate('jwt', {session: false}), (req, res) => {
    Category.find({})
        .then(categories => {
            res.json({
                categories: categories
            })
        })
})

module.exports = router;
