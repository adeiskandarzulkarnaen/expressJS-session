# expressjs - session

multi role login with express js

<!-- 
```
├── src
│   ├── configs
│   │    ├── database.js
│   │
│   ├── controllers
│   │    ├── Auth.js
``` 
-->

## System Requirement
- Node v16.x.x.
- MariaDB - v10.x.xx

## Installation and Setup Instructions
- Make sure you are connected to the internet.
- `npm install` to install all package.
- config database in `.env` file.
- create a database with the same name as the .env DATABASE_NAME
- run `npm run test`, after the sync is complete press `CTRL + C`.
- run `npm run add-user`, after the sync is complete press `CTRL + C`.
- run `npm run server`
- server ready to use.

## Run the server
- run `npm run server`

## End-Point

### Login user
```
POST http://localhost:5000/login
Content-Type: application/json

{
    "email": "azulredhat",
    "password": "123456"
}
```

### Get info user Login
```
GET http://localhost:5000/me
```

### Logout user
```
DELETE http://localhost:5000/logout
```


### Create Broadcast
```
POST http://localhost:5000/broadcast
Content-Type: application/json

{
    "title": "Naon weh",
    "content": "isi content"
}
```

### Get all Broadcast
```
GET http://localhost:5000/broadcast
```
