var express = require('express');
var router = express.Router();


let posts = [
  {
      "userid": "1",
      "title": "Test post 1",
      "image": "UID 1",
      "desc": "Test 1",
      "date": "1678052012358",
  },
  {
    "userid": "1",
    "title": "Test post 2",
    "image": "UID 1",
    "desc": "Test 2",
    "date": "1678052012358",
  },
  {
    "userid": "2",
    "title": "Test post 1",
    "image": "UID 2",
    "desc": "Test 1",
    "date": "1678052012358",
  },
  {
    "userid": "2",
    "title": "Test post 2",
    "image": "UID 2",
    "desc": "Test 2",
    "date": "1678052012358",
  },
  {
    "userid": "3",
    "title": "Test post 1",
    "image": "UID 3",
    "desc": "Test 1",
    "date": "1678052012358",
  },
  {
    "userid": "3",
    "title": "Test post 2",
    "image": "UID 3",
    "desc": "Test 2",
    "date": "1678052012358",
  }
];

let friends = [
  {
      "userid": "1",
      "friendid": "2",
  },
  {
    "userid": "1",
    "friendid": "3",
  },
  {
    "userid": "2",
    "friendid": "1",
  },
  {
    "userid": "2",
    "friendid": "3",
  }
];


router.get('/', (req, resp, next) => { //getting friends posts
  let jsonResp = [];
  if (!req.body || !req.body.id)
  {
      resp.send(401, 'Bad request');
  }
  console.log("!!!!!!!!!!!!!!!!!!");
  posts.forEach(post => {
    friends.forEach(friend => {
      if(req.body.id === friend.userid && post.userid === friend.friendid){
        console.log("Post: " + post.title + " image: " + post.image);
        jsonResp.push(
          {
            "userid": post.userid,
            "title": post.title,
            "image": post.image,
            "desc": post.desc,
            "date": post.date,
          }
        );
      }
    });
  });
 resp.send(JSON.stringify(jsonResp));
});
/*
router.get('/', (req, resp, next) => {
  if (!req.body || !req.body.id)
  {
      resp.send(401, 'Bad request');
  }

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
});*/

module.exports = router;
