var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var users = [
  {
    "_id": 122,
    "name": "Bob",
    "age": 26
  },
  {
    "_id": 321,
    "name": "Jones",
    "age": 45
  }
]
router.get('/', function(req, res, next) {
  res.json(users);
});

router.get('/signup', function(req, res, next) {
  var token = jwt.sign({ username: 'indianajones' }, 'secretpassword', {expiresIn: 1000});
  res.json(token);
});


router.get('/login', function(req, res){
  var token = req.query.token;
  jwt.verify(token, 'secretpassword', function(err, decoded){
  if(!err){
    var secrets = {"accountNumber" : "938291239","pin" : "11289","account" : "Finance"};
    res.json(secrets);
  } else {
    res.send(err);
  }
  })
 })

router.post('/push', (req, res) => {
  console.log(body);
  if(req.body)
      users.push(req.body);

  res.status(200).end();
});

module.exports = router;
