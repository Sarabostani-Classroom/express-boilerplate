var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
  res.send('Hello from express.\n');
});

module.exports = router;