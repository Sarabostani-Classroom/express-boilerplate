var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({data: 'users page'});
});

module.exports = router;
