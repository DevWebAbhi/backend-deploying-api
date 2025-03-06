const express = require("express");

const app = express();


app.get("/ping",(req,res)=>{
    res.send('pong');
})

app.get("/get-info/:id/:password",(req,res)=>{
    try {
        console.log(req.params);
        res.send("sucessful");
    } catch (error) {
        res.status(500).send({message:"something went wrong"})
    }
})

// http://localhost:89/get-info-query/20/54165156415?name=Durga_Prasad&branch=spe



app.get("/get-info-query/:id/:password",(req,res)=>{
    try {
        console.log(req.query)
        console.log(req.params);
        res.send("sucessful");
    } catch (error) {
        res.status(500).send({message:"something went wrong"})
    }
})

app.listen(89,()=>{
    console.log("server connected sucessfully");
})