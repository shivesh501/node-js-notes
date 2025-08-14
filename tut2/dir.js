const fs = require('fs');

//all the create and delete operations are asynchronous

if(!fs.existsSync('./new'))//checks if a given file or folder exists in the given path.. basically checks if a given path exists or not
{
//mkdir   is used to create a new directory in the current working folder
fs.mkdir('./new',(err) =>{
    if(err) throw err; /// use the uncaught exception code

    console.log('directory created');
})
}

if(fs.existsSync('./new'))
{ ///rmdir() is used to remove/ delete a given directory
    fs.rmdir('./new',(err) =>{
        if(err)
            throw err;
        console.log('directory deleted')
    })
}