


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
const connectDB=require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());
// API creation...
app.post("/signup",async (req,res)=>{
   
    // creating a new instance of the User Model
    
    const user = new User(req.body);
    try{
         await user.save();
    res.send("User added successfully!!");
    }catch(err){
        res.status(400).send("Error saving the user" + err.message);
    }
   
});

connectDB().then(()=>{
    console.log("database connection established");
    app.listen(7777, () => {
    console.log("server is successfully listening to port 7777...");
});
}).catch(err=>{
    console.log("database cannot be connected")
});

