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
POST http://localhost:3000/users/push
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
  returns?
}
```
---

```json
PUT http://localhost:3000/users/4
{
  "name": "John",
  "age": 67
}
```
---