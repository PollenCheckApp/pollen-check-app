const express = require('express');
const router  = express.Router();
const axios = require('axios');

/* GET profile page */
router.get('/profile', (req, res, next) => {
  res.render('profile');
});

module.exports = router;
