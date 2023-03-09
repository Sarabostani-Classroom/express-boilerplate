const express = require('express');
const router = express.Router();
const PORT = 3000;

router.get('/', (req, res, next) => {
    console.log('middleware');
    req['craft'] = 'yo';
    next();
  }, (req, res, next) => {
  res.json({data: { title: 'Home Page' }, craft: req.craft});
});

module.exports = router;
