const express = require('express')

const app = express()

const PORT=3000

app.get('/',function (req,res){
    res.send("helloooo")
})

app.listen(PORT,function process(){
    console.log("server started");
})