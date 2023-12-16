# Welcome to Issue Tracker

- Coding Ninja Backend Skill Test Project

## Features

- Authentication and Authorization using jwt token
- Session management
- User Login
- Avatar upload
- Update User
- Email Update
- Password Update

- Resource Management
- Global Error Handling
- Logging Request and errors
- Extensible code flow and Folder structure
- Best env variable setup
- Best Api response for better usability

## Code Flow

- First browser sends the request to the server
- Server points to our specific routes
- before the controller, it may be that there will be middlewares or validators or maybe both
- If no Middleware of the validator then the request goes to the specific controller
- Controllers will send back the response, if no need to call services
- Services are basically functions that help us to get data from DB (here is Mongo DB)
- Service may use models to save data in some specific format

Note:
Middleware/validators may or may not be there
Services/models may or may not be there


## Packages used in this project.

1. bcrypt
   -> To hash and compare the hashed password
2. compression
   -> To compress res bodies
3. cookie-parser
   -> To interact with cookies
4. dotenv
   -> To store sensitive configurations in a .env file
5. express
   -> To create Servers (with minimal code)
6. express-async-handler
   -> To wrap controller function so that if any error comes it will next function with the error automatically
7. express-rate-limit
   -> To prevent or limit repeated requests to our APIs (a normal user can not send more than 60 request per second)
8. express-session
   -> To manage Sessions
9. express-validator
   -> To validate request body data
10. helmet
    -> Helmet helps secure Express apps by setting HTTP response headers.
11. jsonwebtoken
    -> To create jwt token
12. nodemailer
    -> To send email
13. winston
    -> It helps us to log the req or res in a very easy way
14. mongoose
    -> to interact with mongodb
15. connect-mongo
    -> to store all sessions in mongodb
16. swagger-ui-express
    -> to show api docs for better usability of api end points
17. multer
    -> to upload image
18. ejs
   -> EJS is a tool for generating web pages that can include dynamic data and can share templated pieces with other web pages (such as common headers/footers).

## How to run this project locally

- Clone this repository
- create a .env file at the root of this project
- create all env variable which is given in the .env.example file with proper info
- then run npm install (to install all packages used in this project)
- then run npm run start
- go to the link shown in the terminal all api docs are there
- Now you are good to go
- Thank YOU

Note: 
   - if you put mongoUri of atlas, then please store user and password in .env file and uncomment in db.config.js (user and pass) refer .env.example file
   - if you are using local mongodb and user and password is not required then comment user and password in db.config.js

### Live Demo Link

[Live Demo Link](https://issue-tracker-ueg8.onrender.com)
