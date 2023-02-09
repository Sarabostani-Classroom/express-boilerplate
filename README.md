# Express Boilerplate

- - -
### api list
```json
GET http://localhost:3000/users

[
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
```
---
```json
POST/Login http://localhost:3000/login/push
content-type: application/json

{
    "username": "John2344",
    "password": "Password1234",
}
```
---
```json
POST/SignUp http://localhost:3000/login/push
content-type: application/json

{
    "_id": 3434,
    "name": "John",
    "age": 34
}
```
---


```json
DELETE http://localhost:3000/users/4
{
  "log_id": 12345,
  "title": string,
  "content": string,
  "creator_id": number,
}
```
---

```json
PUT http://localhost:3000/users/4
{
  "user_id": number
  "name": string,
  "age": number
}
```
---
