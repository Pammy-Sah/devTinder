const express = require("express");
const app = express();


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

app.use("/user",(req,res)=>{
    // Route Handler
    res.send("Route Handler 1");
});


app.listen(7777, () => {
    console.log("server is successfully listening to port 7777...");
});