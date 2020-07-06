const express = require("express");
const passport = require("passport");
const router = express.Router();
const ensureLogin = require("connect- ensure-login");


// Model

const User = require("../models/user.js")

// Bcrypt

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

// SIGNUP ROUTES
// ======================
router.get('/signup', (req, res, next) => {
    res.render("auth/signup.hbs");
});

router.post("/signup", (req, res, next) => {
    // takes the UserName + Password from the BodyParser 
    const username = req.body.username;
    const password = req.body.password;

    // Signup Logic
    if (username === "" || password === "") {
        res.render("auth/signup.hbs", {message: "Signup is only possible with a Username and a Password"});
        return;
    }

    User.findOne({ username })
    .then(user => {
        if(user !== null) {
            res.render("auth/signup.hbs", {message: "This Username belongs to someone else, choose a different Username"});
            return;
        }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
    const newUser = new User({
        username,
        password: hashPass
    });

    newUser.save((err) => {
        if (err) {
            res.render("auth/signup.hbs", {message: "Something went wrong"});
        }   else {
            res.redirect('/');
        }
    })
    })
    .catch(error => {
        next(error)
    })
});
// ======================


// PASSPORT LOGIN ROUTES
// ======================
router.get("/login", (req, res, next) => {
    res.render("auth/login");
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
}));
// ======================
// PASSPORT LOGOUT ROUTES
// ======================

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
});


router.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {
    res.render("private.hbs", { user: req.user });
});




module.exports = router;