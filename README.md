# Social Media API

## Endpoints:
### Create account:
POST /Account/:id?_method=POST\
**Body:**
```
    Username: <String - UTF8>
```
**Response:**
```
    HTTP/1.1 200 OK
    Date: <Date time format as string>
    Status: Created <UserID>
    Connection: close
```
### Create post:
POST /Account/Post/:id?_method=POST\
**Body:**
```
    Title: <String - UTF8>
    Image: <file>
    Description: <String - UTF8>
    Date: <Current Timestamp>
```
**Response:**
```
    HTTP/1.1 200 OK
    Date: <Date time format as string>
    Status: Created
    Connection: close
```
### Update post:
PUT /Account/Post/:id?_method=PUT\
**Body:**
```
    Title: <String - UTF8>
    Image: <file>
    Description: <String - UTF8>
    EditDate: <Current Timestamp>
```
**Response:**
```
    HTTP/1.1 200 OK
    Date: <Date time format as string>
    Status: Updated post <Post title>
    Connection: close
```
### Delete post:
DELETE /Account/Post/id\
**Response:**
```
    HTTP/1.1 200 OK
    Date: <Date time format as string>
    Status: Deleted post <Post title> - <ID>
    Connection: close
```
### Add to your followers:
PUT /Account/:id?_method=PUT\
**Body:**
```
    MyID: <INT>
    FriendID: <INT>
```
**Response:**
```
    HTTP/1.1 200 OK
    Date: <Date time format as string>
    Status: Friended <Username>
    Connection: close
```
### View my posts:
GET /Account/Posts/\
**Body:**
```
    AccountID: <INT>
```
**Response:**
```
    HTTP/1.1 200 OK
    Date: <Date time format as string>
    Status: Updated post <Post title>
    Connection: close
    Body:
        [0]
            PostID: <INT>
            PosterID: <INT>
            Title: <String>
            ImageURL: <String>
            Date: <Timestamp>
        [1]
            PostID: <INT>
            PosterID: <INT>
            Title: <String>
            ImageURL: <String>
            Date: <Timestamp>
        [...]
```
### View follower posts:
GET /Account/Friends/Posts/
**Body:**
```
    AccountID: <INT>
```
**Response:**
```
    HTTP/1.1 200 OK
    Date: <Date time format as string>
    Status: Updated post <Post title>
    Connection: close
    **Body:**
        [0]
            PostID: <INT>
            PosterID: <INT>
            Title: <String>
            ImageURL: <String>
            Date: <Timestamp>
        [1]
            PostID: <INT>
            PosterID: <INT>
            Title: <String>
            ImageURL: <String>
            Date: <Timestamp>
        [...]
```
