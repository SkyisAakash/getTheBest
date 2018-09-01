const express = require('express')
const router = express.Router();
const passport = require('passport');

router.get("/categories", passport.authenticate('jwt', {session: false}), (req, res) => {
    let services = [{service1}, {service2}]
    res.json({services: services});
})

module.exports = router;
