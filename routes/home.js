var express = require('express');
var router = express.Router();

var fun1 = (req, res, next) => {
  console.log('middleware');
  req['craft'] = 'yo';
  next();
};

var fun2 = (req, res, next) => {
  res.json({data: { title: 'Home Page' }, craft: req.craft});
};

router.get('/', fun1, fun2);

module.exports = router;
