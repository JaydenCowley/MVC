const router = require('express').Router();

const { User } = require('../models');
//const addWorkoutRoutes = require('./workout-routes'); 

router.get('/', (req, res) => {
  res.render('dashboard')
});
router.get('/createUser', (req, res) => {
  res.render('createUser')
})
// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

router.get('/dashboard', (req, res) => {
  
  res.render('dashboard', 
  {loggedIn: req.session.loggedIn}
  );
})





module.exports = router;