import express from "express";
/*
body-parser middleware is used to parse incoming request bodies (JSON, URL-encoded) 
 and make the parsed data available in req.body property.
*/ 
import bodyParser from "body-parser";
import userRouter from './routes/user.js';
const port = 3000;
const app = express();
app.use(bodyParser.json());
/*app.get('/',(req,res)=>{
    res.json({
        "name" :"person 1",
        "age" : "24",

    })

}); */

app.get("/",(req,res) =>{
    res.send(`goto http://localhost:${port}/users`)
})

app.use('/', userRouter)

app.listen(port, ()=>{console.log(`server is running on ${port}`)});