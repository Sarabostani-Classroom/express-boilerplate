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
let sessions = [
    {
        "sessionTime": "1678052012358",
        "Token": "abc123",
        "user": "admin",
        "uid": "1"
    }
]


router.post('/signup', (req, resp, next) => {
    if (!req.body || !req.body.username || !req.body.password)
    {
        resp.send(401, 'Bad request');
    }
    
    const username = req.body.username;
    const password = req.body.password;
    let userId = 1;
    
    var mToken = Math.random().toString(36);
    mToken = mToken.substring(2);

    users.forEach(element => {
        if (userId <= parseInt(element.id))
        {
            userId = userId + 1;
        }
    });
    
    users.push({
        id: userId,
        username: username,
        password: password,
    });
    sessions.push({
        sessionTime: Date.now(),
        token: mToken,
        user: username,
        uid: userId,
    });

    console.log("Req Body: " + req.body);
    console.log("All Users: ");
    users.forEach(element => {
        console.log("Username: " + element.username + " Password: " + element.password + " ID: " + element.id);
    });
    
    resp.send({ token: mToken });
});


router.post('/login', (req, resp, next) => {
   
    if(!req.headers.authorization){
        if (!req.body || !req.body.username || !req.body.password)
        {
            resp.send(401, 'Bad request');
        }
        let userID = null;
        users.forEach(element => {
            if ((element.username === req.body.username) && (element.password === req.body.password)){
                userID = element.id;
            }
        });
        
        if (userID === null){
            resp.send("login failed. Please sign up.");
        }else{
            var mToken = Math.random().toString(36);
            mToken = mToken.substring(2);
            const username = req.body.username;
            const timestamp = Date.now();
           
        
            sessions.push({
                sessionTime: timestamp,
                token: mToken,
                user: username,
                uid: userID,
            });
            
            resp.send({ token: mToken });
        }

    } else {
        
        let GivenToken = req.headers.authorization.substring(7);
        sessions.forEach(element => {
            if (element.Token === GivenToken && req.body.username === element.user){
                resp.send("Active session: " + element.Token);
            }
        });
        resp.send("incorrect username or token.")
    }
});


module.exports = router;