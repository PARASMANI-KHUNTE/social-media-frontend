const express =  require("express");
const path = require('path');
const app = express();
const port = 3000;


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'public','templates','landingPage.html'));
})


app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,'public','templates','login.html'));
})

app.get("/signup",(req,res)=>{
    res.sendFile(path.join(__dirname,'public','templates','signup.html'));
})


app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,'public','templates','login.html'));
})







app.listen(port,()=>{
    console.log("Server is running! on port " + port);
})