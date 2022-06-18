/*
File Name - users.js
Student Name - Bhhodip patel
Student ID - 301251644
Date - 17-6-2022
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
