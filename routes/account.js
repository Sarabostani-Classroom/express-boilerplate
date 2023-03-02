var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  res.json({data: 'This is accounts/ Method:post'});
});
router.put('/', function(req, res) {
    res.json({data: 'This is accounts/ Method:put for adding followers'});
  });
router.get('/post', function(req, res) {
    res.json({data: 'This is accounts/post for getting posts'});
});
router.post('/post', function(req, res) {
    res.json({data: 'This is accounts/post Method:post'});
});
router.put('/post', function(req, res) {
    res.json({data: 'This is accounts/post Method:put for updating posts'});
});
router.delete('/post', function(req, res) {
    res.json({data: 'This is accounts/post Method:delete for deleting posts'});
});
router.get('/friends/posts', function(req, res) {
    res.json({data: 'This is accounts/friends/posts Method:get getting posts of friends'});
});

module.exports = router;
