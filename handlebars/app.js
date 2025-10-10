const express = require('express');
const app = express();
const port = 3000;

//inorder to send static files we create a public folder containing them
/// we do app.use() pointing to that folder in order to send those files

//we create a views folder to hold the important handlebars related files.. create a main.handlebars and a layouts folder with index.handlebars
const handlebars = require('express-handlebars');
//setting the view engine as handlebars
app.set('view engine','hbs');
//use the app.engine to pass the handlebars and the properties
app.engine('hbs',handlebars.engine({
layoutsDir: `${__dirname}/views/layouts`,
extname: 'hbs',
defaultLayout: 'index',
partialsDir: `${__dirname}/views/partials`
}));

app.use(express.static('public'));
//now we can send the files inside the public folder

const fakeApi = ()=>{
    return [
        {name:"person 1", id: "midlaner"},
        {name:"person 2", id: "toplaner"},
        {name:"person 3", id: "midlaner"},
        {name:"person 4", id: "toplaner"}
    ]
}
const list = true;
app.get('/',(req,res)=>{
    //render has two properties 'main' pointing to main.handlebars and layout property pointing to files(index.handlebars) inside layouts folder
    res.render('main', {layout:'index',helperblock: fakeApi(), listExists:list});//we can specify the {layout:index }here as well, this will override the defaultLayout property
});

app.listen(port,()=>{
    console.log(`app listening to port = ${port}`);
})