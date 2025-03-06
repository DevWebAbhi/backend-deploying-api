const express = require("express");

const app = express();


app.get("/ping",(req,res)=>{
    res.send('pong');
})

app.listen(89,()=>{
    console.log("server connected sucessfully");
})