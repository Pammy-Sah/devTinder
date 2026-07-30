const express = require("express");
const app = express();


// this will only handle GET call to the /user
app.get("/user",(req,res)=>{
    res.send({firstname:"pammy" ,lastname:"sah"});
})

// this will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
    res.send("Hello from the server");
});

app.use("/xyz", (req, res) => {
    res.send("hello everyone");
});

app.use("/", (req, res) => {
    res.send("Hello from the dashboard");
});

app.listen(7777, () => {
    console.log("server is successfully listening to port 7777...");
});