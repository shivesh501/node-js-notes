const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const firstMiddleWare = (req,res,next) =>{
    console.log(res);
    next();
};
app.use(express.static(path.join(__dirname,"public")));
app.use(firstMiddleWare);

app.get('/',(req,res)=>{
    res.send("hello world");
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
    // res.status(500); // we can use this to set the status code if needed
})
app.get('/contact',(req,res)=>{
    res.json({number:"5555555555"});
})

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`);
})