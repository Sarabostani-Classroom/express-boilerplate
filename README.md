# Express Boilerplate

- - -
### web log api list
```json
GET /

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
response status code: 
- 200 OK
```
---
```json
GET/Login http://localhost:3000/login/
content-type: application/json

{
    "name":"JsonWebTokenError","message":"jwt must be provided"
}
response status code: 
- 304 OK
```
---
```json
GET/Login http://localhost:3000/login?token="accesstoekn"/
content-type: application/json

{
  "accountNumber":"938291239","pin":"11289","account":"Finance"
}
response status code: 
- 304 OK
```
---

```json
GET/SignUp http://localhost:3000/signup/
content-type: application/json

response status code: 
- 200 OK

{
   "access_token": <access_token>
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
response status code: 
- 202 Accepted
- 204 No Content
- 200 OK
```
---

```json
PUT http://localhost:3000/users/4
{
  "user_id": number
  "name": string,
  "age": number
}
response status code: 
- 202 Accepted
- 204 No Content
- 201 Created
```

---
```json
POST /log
content-type: application/json

{
   "title": string,
   "content": string,
   "creator_id": number,
} 
response status code: 
- 200 OK

```
---

```json
DELETE /log/12345
{
    "log_id": 12345,
    "title": string,
    "content": string,
    "creator_id": number,
}
response status code: 
- 202 Accepted
- 204 No Content
- 200 OK 
```
---

```json
PUT /log/12345
{
    "title": string,
    "content": string,
    "creator_id": number,
}
response status code: 
- 200 OK
```
---

```json
GET /log/12345 - 404
response status code: 
- 404 Not Found
```
---

```json
GET /log/user/9876
{
    "_id": 9876,
    "name": "Bob",
    "age": 26
}
response status code: 
- 200 OK

```
---



