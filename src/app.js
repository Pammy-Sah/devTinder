


// this will only handle GET call to the /user
// app.get("/user",(req,res)=>{
//     res.send({firstname:"pammy" ,lastname:"sah"});
// })

// // this will match all the HTTP method API calls to /test
// app.use("/test", (req, res) => {
//     res.send("Hello from the server");
// });

// app.use("/xyz", (req, res) => {
//     res.send("hello everyone");
// });

// app.use("/", (req, res) => {
//     res.send("Hello from the dashboard");
// });


// app.use("/admin",g)

// app.use("/user",(req,res,next)=>{
//     // route handler
//     // res.send("route handler 1"); //it will show only sending request
//     console.log("handling the route  user!!");  //it will print in a browser but doesn't shows the request 
//     res.send("Response!!");
    // next();
    // res.send("Response!!");
// })

// ,(req,res,next)=>{
//     //route handler 2
//     console.log("handling the route  user 2!!");  //it will print in a browser but doesn't shows the request 
//     // res.send(" 2nd Response!!");
//     next();
// },(req,res,next)=>{
//     //route handler 2
//     console.log("handling the route  user 3!!");  //it will print in a browser but doesn't shows the request 
//     // res.send(" 3nd Response!!");
//     next();
// },(req,res,next)=>{
//     //route handler 2 
//     console.log("handling the route  user 4!!");  //it will print in a browser but doesn't shows the request 
//     // res.send(" 4nd Response!!");
//     next();
//     res.send(" 4nd Response!!")
// });

// const {adminAuth} = require("./middlewares/auth");

// app.use("/admin",adminAuth);

// app.use("/user",(req,res)=>{
//     // Route Handler
//     res.send("user data sent");
// });









const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const {userAuth} = require("./middlewares/auth");

app.use(express.json());
app.use(cookieParser());

const JWT_SECRET = "DEV@TINDER$790";

// ================= SIGNUP =================

app.post("/signup", async (req, res) => {
    try {
        // Validate data
        validateSignUpData(req);

        const { firstName, lastName, emailId, password } = req.body;

        // Encrypt password
        const passwordHash = await bcrypt.hash(password, 10);

        // Create new user
        const user = new User({
            firstName,
            lastName,
            emailId,
            password: passwordHash,
        });

        await user.save();

        res.send("User added successfully!!");

    } catch (err) {
        res.status(400).send("Error saving the user: " + err.message);
    }
});


// ================= GET USER BY EMAIL =================

// app.get("/user", async (req, res) => {
//     const userEmail = req.body.emailId;

//     try {
//         const user = await User.find({ emailId: userEmail });

//         if (user.length === 0) {
//             res.status(404).send("User not found");
//         } else {
//             res.send(user);
//         }

//     } catch (err) {
//         res.status(400).send("Something went wrong");
//     }
// });


// ================= FEED API =================

// app.get("/feed", async (req, res) => {
//     try {
//         const users = await User.find({});
//         res.send(users);

//     } catch (err) {
//         res.status(400).send("Something went wrong");
//     }
// });


// ================= DELETE USER =================

// app.delete("/user", async (req, res) => {
//     const userId = req.body.userId;

//     try {
//         await User.findByIdAndDelete(userId);

//         res.send("User deleted successfully");

//     } catch (err) {
//         res.status(400).send("Something went wrong");
//     }
// });


// ================= UPDATE USER =================

// app.patch("/user", async (req, res) => {
//     const emailId = req.body.emailId;
//     const data = req.body;

//     try {
//         await User.findOneAndUpdate(
//             { emailId: emailId },
//             data
//         );

//         res.status(200).send("User updated successfully");

//     } catch (err) {
//         res.status(400).send("Something went wrong");
//     }
// });


// ================= LOGIN =================

app.post("/login", async (req, res) => {
    try {
        const { emailId, password } = req.body;

        const user = await User.findOne({ emailId: emailId });

        console.log("EMAIL:", emailId);
        console.log("USER FOUND:", user);

        if (!user) {
            return res.status(400).send("User not found");
        }

        console.log("PASSWORD FROM REQUEST:", password);
        console.log("PASSWORD FROM DB:", user.password);

        const isPasswordValid =await user.validatePassword(password);

        console.log("PASSWORD VALID:", isPasswordValid);

        if (!isPasswordValid) {
            return res.status(400).send("Wrong password");
        }

        const token = await user.getJWT();
            

        console.log("TOKEN:", token);

       res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000)
     });

        res.send("Login Successful");

    } catch (err) {
        console.log(err);
        res.status(400).send("ERROR: " + err.message);
    }
});


// ================= PROFILE =================

app.get("/profile", userAuth , async (req, res) => {
    try {
        const user = req.user;
        if(!user){
            throw new error("user does not exist");
        }

        res.send(user);

    } catch (err) {
        console.log(err.message);

        res.status(401).send("Invalid token");
    }
});


// ================send connection request==========================
app.post("/sendConnectionRequest",userAuth,async (req,res)=>{
    // sending connection request
    console.log("sending a connection request");
    res.send("Connection Request Send!");
})


// ================= DATABASE CONNECTION =================

connectDB()
    .then(() => {
        console.log("Database connection established");

        app.listen(7777, () => {
            console.log(
                "Server is successfully listening on port 7777..."
            );
        });
    })
    .catch((err) => {
        console.log("Database cannot be connected", err);
    });