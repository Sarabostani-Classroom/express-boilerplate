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
        "id": "1",
        "username": "admin",
        "password": "admin",
    }
];


router.post('/signup', (req, resp, next) => {
    if (!req.body || !req.body.username || !req.body.password)
    {
        resp.send(401, 'Bad request');
    }
    
    const username = req.body.username;
    const password = req.body.password;
    let userId = 1;

    users.forEach(element => {
        if (userId <= parseInt(element.id))
        {
            userId = userId + 1;
        }
    });

    console.log("1");
    

    users.push({
        id: userId,
        username: username,
        password: password,
    });
    console.log("Req Body: " + req.body);
    console.log("All Users: ");
    users.forEach(element => {
        console.log("Username: " + element.username + " Password: " + element.password + " ID: " + element.id);
    });

    resp.send("signing up");
});

router.post('/login', (req, resp, next) => {
    if (!req.body || !req.body.username || !req.body.password)
    {
        resp.send(401, 'Bad request')
    }

    users.forEach(element => {
        if ((element.username = req.body.username) && (element.password = req.body.password)){
            resp.send()
        }
    });

    resp.send("loging in");
});

module.exports = router;