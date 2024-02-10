const express = require('express')
const bodyParser= require('body-parser')

const app = express()

const PORT=3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))

let blogList = [];

app.get('/blogs',(req,res) => {
    res.status(200).json({
        data : blogList,
        success : true
    });
});

app.post('/blogs', (req,res) => {
    blogList.push({title : req.body.title,
         content : req.body.content,
         id : Math.floor(Math.random()*1000) 
        })
    return res.status(201).json({
        success : true
    });
})

app.delete('/blogs/:id', (req,res) => {
    const index = blogList.findIndex(item => item.id == req.params.id);

// Remove object at found index
    if (index !== -1) {
     blogList.splice(index, 1);
    }
    return res.status(200).json({
        data : blogList,
        success : true
    })
})

app.listen(PORT,function process(){
    console.log("server started");
})