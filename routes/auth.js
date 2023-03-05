var express = require('express');
var router = express.Router();

router.post('/signup', (req, resp, next) => {
    resp.send("signing up");
});

router.post('/login', (req, resp, next) => {
    resp.send("loging in");
});

module.exports = router;