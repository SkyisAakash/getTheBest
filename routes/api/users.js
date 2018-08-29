const express = require('express');
const router = express.Router();
// router.get("/test", (req, res) => res.json("user route works fine"));
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

router.post("/register", (req, res) => {
    User.findOne({email: req.body.email})
    .then(user => {
        if(user) {
            res.status(400).json({email: "The email is already in use"})
        } else {
                const newUser = new User({
                    email: req.body.email,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    password: req.body.password
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) console.log("err1" + err);
                        newUser.password = hash;
                        newUser.save()
                            .then(user => {
                                console.log(user);
                                safeUser = {}
                                safeUser._id = user._id;
                                safeUser.firstname = user.firstname,
                                safeUser.lastname = user.lastname,
                                safeUser.email = user.email
                                res.json(safeUser);
                            })
                            .catch(err => console.log("err2" + err));
                    })
                })
            }
        })
    // res.json("register user works")
})

module.exports = router;