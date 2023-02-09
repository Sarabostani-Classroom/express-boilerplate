var express = require('express');
var router = express.Router();


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

router.post('/push', (req, res) => {
  console.log(body);
  if(req.body)
      users.push(req.body);

  res.status(200).end();
});

module.exports = router;
