# Socal Media API

## Endpoints:
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
    ...
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
    ...
'''
### Delete post:
DELETE /Account/Post/id
response:
'''
    HTTP/1.1 200 OK
    Date: <Date time format as string>
    Status: Deleted post <Post title> - <ID>
    Connection: close
    ...
'''
### Add to your followers:
### View follower posts: