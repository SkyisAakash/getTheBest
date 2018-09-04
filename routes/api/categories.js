const express = require('express')
const router = express.Router();
const passport = require('passport');
const Category = require('../../models/Category');

router.get("/", passport.authenticate('jwt', {session: false}), (req, res) => {
    Category.find({})
        .then(categories => {
            // console.log(categories);
            let ans = {}
            categories.map((category) => {
                ans[category._id] = category
            })
            res.json({
                categories: ans
            })
        })
})

module.exports = router;
