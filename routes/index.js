const express = require('express');
const router = express.Router();
const Register = require("../models/register.schema")

//csetting up the home page
router.get('/', (req, res, next) => {
  res.render('home');
});

//crud for the register page
router.get('/register', (req, res, next) => {
  res.render('register');
});

//receiving the post from form and redirecting to the login page
router.post("/user", (req, res, next) => {
  Register.create(req.body).then((signUp) => {
    res.redirect("/login");
  });

});

//crud for the login page
router.get('/login', (req, res, next) => {
  res.render('login');
});

//receiving the post from form and redirecting to t;he home page
router.post("/signup", (req, res, next) => {
  const body = req.body;

  res.redirect("/");
});

module.exports = router;
