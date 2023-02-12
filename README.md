# Socal Media API

## Endpoints:
### Create account:
POST /Account/:id?_method=POST
Body:
'''
{
    Username: <String - UTF8>
}
'''
response:
'''
    HTTP/1.1 200 OK
    Date: <Date time format as string>
    Status: Created <UserID>
    Connection: close
'''
### Create post:
POST /Account/Post/:id?_method=POST
Body:
'''
    Title: <String - UTF8>
    Image: <file>
    Description: <String - UTF8>
    Date: <Current Timestamp>
'''
response:
'''
    HTTP/1.1 200 OK
    Date: <Date time format as string>
    Status: Created
    Connection: close
'''
### Update post:
PUT /Account/Post/:id?_method=PUT
Body:
'''
    Title: <String - UTF8>
    Image: <file>
    Description: <String - UTF8>
    EditDate: <Current Timestamp>
'''
response:
'''
    HTTP/1.1 200 OK
    Date: <Date time format as string>
    Status: Updated post <Post title>
    Connection: close
'''
### Delete post:
DELETE /Account/Post/id
response:
'''
    HTTP/1.1 200 OK
    Date: <Date time format as string>
    Status: Deleted post <Post title> - <ID>
    Connection: close
'''
### Add to your followers:
PUT /Account/:id?_method=PUT
Body:
'''
    MyID: <INT>
    FriendID: <INT>
'''
response:
'''
    HTTP/1.1 200 OK
    Date: <Date time format as string>
    Status: Friended <Username>
    Connection: close
'''
### View my posts:
GET /Account/Posts/
'''
    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2
'''
Body:
'''
    AccountID: <INT>
'''
response:
'''
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
'''
### View follower posts:
GET /Account/Friends/Posts/
'''
    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2
'''
response:
'''
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
'''