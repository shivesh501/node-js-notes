const fs = require('fs');
const path = require('path')


/* 
path.join(__dirname, folder_name,file_name)

*/

///READING A FILE
fs.readFile(path.join(__dirname,'files','starter.txt'),"utf8",(err,data) =>{
    if(err)
        throw err;
    console.log(data); 
    //we specify the encoding since we logging the data normally gives a buffer string... so either we specify the encoding or we do data.toString()  
}) 

console.log("hello.......")//this will print first while the system keeps on buffering the file then print the contents of the file

//WRITING A FILE
fs.writeFile(path.join(__dirname,'files','reply.txt'),"Nice to meet you",(err)=>{
    if(err)
        throw err
    console.log("WRITE COMPLETED")

    //better to used append file inside write file to ensure first the file is created and then appended
    fs.appendFile(path.join(__dirname,'files','reply.txt'),"\n\nyes it is",(err)=>{
    if(err)
        throw err
    console.log("APPEND COMPLETED")
})
})

/*
//APPENDING A FILE (it also creates a new file if the file does not exist) 
fs.appendFile(path.join(__dirname,'files','test.txt'),"TESTING",(err)=>{
    if(err)
        throw err
    console.log("APPEND COMPLETED")
}) */



//if there is an uncaught exception then exit
process.on('uncaughtException', err => {
    console.log(`there was an uncaught error ${err}`);//logging the error
    process.exit(1);//returing exit code 1 to the proces since an error has occurred
})