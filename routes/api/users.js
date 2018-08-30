const express = require('express');
const router = express.Router();
// router.get("/test", (req, res) => res.json("user route works fine"));
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jsonwebtoken = require('jsonwebtoken');
const keys = require('../../private/keys');
const passport = require('passport');

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
                                safeUser = {}
                                safeUser._id = user._id;
                                safeUser.firstname = user.firstname,
                                safeUser.lastname = user.lastname,
                                safeUser.email = user.email
                                jsonwebtoken.sign(safeUser, 
                                         keys.secretOrKey,
                                         {expiresIn: 3600},
                                         (err, token) => {
                                            res.json({
                                                success: true,
                                                token: 'Bearer ' + token,
                                                user: safeUser
                                            })
                                        })
                            })
                            .catch(err => console.log("err2" + err));
                    })
                })
            }
        })
    // res.json("register user works")
});

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
        .then((user) => {
            if(!user) {
                res.status(404).json({email: "Email not registered"});
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        const payload = { id: user._id, 
                                          firstname: user.firstname, 
                                          lastname: user.lastname, 
                                          email: user.email}
                        jsonwebtoken.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: 3600},
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token,
                                    user: payload
                                });
                            }
                        )
                    } else {
                        return res.status(400).json({ password: 'Incorrect password' })
                    }
                }) 
        })
})

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
        id: req.user.id,
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        email: req.user.email
    })
})

module.exports = router;