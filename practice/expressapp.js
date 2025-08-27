const express = require('express');
const app = express();
const port = process.env.PORT || 3900;

app.get('/',(request,response)=>{
  response.send('inital page');
})
app.get('/about',(request,response)=>{
    response.send('About Page');
})

app.listen(port,()=>{
    console.log(`Example app is listening to port ${port}`)
})