var express = require('express');
var router = express.Router();

var tweets = [
    {
        _id: 1234,
        title: 'Tweet 1',
        body: 'This is a tweet',
        user_id: 73749
    },
    {
        _id: 32445,
        title: 'Tweet 2',
        body: 'This is another tweet',
        user_id: 672356
    }
];

router.post('/', (req, res) => {
    console.log(req.body);
    if (req.body)
        tweets.push(req.body);
    res.status(200).end();
});

router.get('/all', (req, res) => {
    res.json(tweets);
});

module.exports = router;