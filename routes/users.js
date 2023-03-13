const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.json({data: 'list of users'});
});

module.exports = router;
