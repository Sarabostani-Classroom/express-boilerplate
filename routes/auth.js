var express = require('express');
var router = express.Router();
/*
Postman /signup:
    body:
        setting: raw -> json 
    
    {
        "username": "isaak",
        "password": "Wheeler"
    }
*/


let users = [
    {
        "username": "admin",
        "password": "admin",
    }
];

router.post('/signup', (req, resp, next) => {
    if (!req.body || !req.body.username || !req.body.password)
    {
        resp.send(401, 'Bad request')
    }

    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password,
    });
    console.log("Req Body: " + req.body);
    console.log("All Users: ");
    users.forEach(element => {
        console.log("Username: " + element.username + " Password: " + element.password);
    });

    resp.send("signing up");
});

router.post('/login', (req, resp, next) => {
    resp.send("loging in");
});

module.exports = router;