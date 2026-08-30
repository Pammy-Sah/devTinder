-create a repository
-Initialize the repository
-node_modules, package.json, package-lock-json
-Install express
-create a server
-Listen to port 7777
-Write request handlers for /test , /hello
-Install nodemon and updates scripts inside package.json
-What are dependencies
-what is the use of "-g" while npm install
-Difference between caret and tilder ( ^ vs ~)


-initiallize git
-gitignore
-create a remote repo on github
-push all code to remote origin
-play with route extensions 
-order of routes matter a lot
-install postman app and make a workspace/collections to test API calls
-wrtie logic to handle GET,POST,DELETE,PATCH API calls 


-Multiple route handlers - play with the code
-next()
-next function errors along with res.send()
-app.use("/route",rH,[rH2,rH3],rH4,rH5)
-what is middleware
-how express js basically handlers requests behind the scene
-diff betweeen app.use vs app.all

-create a free cluster on mongodb website
-install moongoose library
-connect your application to the database"Connection-url"/devTinder
-call the connectDB function and connect to database before starting application on port 7777
-create  a user schema nd user model
-create POST/signup API to add data to the database
-push some documents using API calls from postman
-GET user by Id
-create a /delete user API
-API - update the user

-Explore schema options from the document
-add required,unique,lowercase,min,minilength,trim
-Add default
-create a custom validate function for gender
-Improve the DB Schema - PUT all appropriate validation on each field on schema
-Add timestamp to the user schema
-add API level validation on Patch request & signup post request
-DATA Sanitization add validation for each field
-install validator
-explore validator function  nd use validator function for password,email

-validate data in signUp API
-Install bcrypt package
-create passwordHash using bcrypt.hash and save the user with encrypted password
-create login API
-compare passwords and throw error if email or password is invalid

-install cookie-parser
-just send a dummy cookie to user
-create GET/profile API and check if u get the cookie back
install jwtwebtoken
-in login API , after email and password validation,create a JWT token and send it to the user in cookie
-read the cookies inside your profile API and find the logged in user
-userAuth middleware
-Add the userAuth middleware in profile API and a new sendConnectionRequest API
-set the expiry of JWT token and cookies to 7 days
-create userSchema method to get JWT
-create userSchema method to comparebcrypt(password) by user