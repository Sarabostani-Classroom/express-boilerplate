var express = require('express');
var router = express.Router();

router.post('/', (req, res, next) => {
    console.log('middleware');
    req['craft'] = 'yo';
    next();
  }, (req, res, next) => {
  res.json({data: { title: 'This is accounts/ Method:post' }, craft: req.craft});
  //res.json({data: 'This is accounts/ Method:post'});
});
router.put('/', (req, res, next) => {
    console.log('middleware');
    req['craft'] = 'yo';
    next();
  }, (req, res, next) => {
  res.json({data: { title: 'This is accounts/ Method:put for adding followers' }, craft: req.craft});
});
router.get('/', (req, res, next) => {
    console.log('middleware');
    req['craft'] = 'yo';
    next();
  }, (req, res, next) => {
  res.json({data: { title: 'This is accounts/ Method:get for getting account' }, craft: req.craft});
});
router.get('/post', (req, res, next) => {
    console.log('middleware');
    req['craft'] = 'yo';
    next();
  }, (req, res, next) => {
  res.json({data: { title: 'This is accounts/post Method:get for getting posts' }, craft: req.craft});
});
router.post('/post', (req, res, next) => {
    console.log('middleware');
    req['craft'] = 'yo';
    next();
  }, (req, res, next) => {
  res.json({data: { title: 'This is accounts/post Method:post' }, craft: req.craft});
});
router.put('/post', (req, res, next) => {
    console.log('middleware');
    req['craft'] = 'yo';
    next();
  }, (req, res, next) => {
  res.json({data: { title: 'This is accounts/post Method:put for updating posts' }, craft: req.craft});
});
router.delete('/post', (req, res, next) => {
    console.log('middleware');
    req['craft'] = 'yo';
    next();
  }, (req, res, next) => {
  res.json({data: { title: 'This is accounts/post Method:delete for deleting posts' }, craft: req.craft});
});
router.get('/friends/posts', (req, res, next) => {
    console.log('middleware');
    req['craft'] = 'yo';
    next();
  }, (req, res, next) => {
  res.json({data: { title: 'This is accounts/friends/posts Method:get getting posts of friends' }, craft: req.craft});
});

module.exports = router;
