var express = require('express');
var router = express.Router();

router.post('/signup', (req, resp) => {
    resp.send("signing up");
});