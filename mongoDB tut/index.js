const mongoose = require("mongoose");

//.connect() returns a promise  hence we use then and pass a function
mongoose.connect("mongodb://localhost:27017/Sample").then(()=>{
    console.log("successsfully connected to the MONGODB database")
}).catch((err)=>{
    console.log(err)
})

// in mongoose to insert data first we need to prepare the schema (i.e. the fields and the restrictions like length, type etc.)
const student = new mongoose.Schema({
    name:{type:String, required:true},
    workout:Boolean,
    height:Number
});
// after the schema we need to prepare the model
const Student = new mongoose.model("Student",student);

//creating a async function to add the data since the save() method returns a promise
const addData = async () => {

    /*
    //now we create the document and add the data
const ss = new Student({
    name:"Alpha",
    workout:true,
    height:174
})

// we save the data
await ss.save() */

// another way to create and add data at one go 

   const ss = await Student.create({
      name:"Bravo",
      workout:true,
      height:174
   })
   console.log(ss);
}
const findData = async () =>{
    const ss = await Student.find({height:{$gt:170}});
    //check the mongoDB query selectors for more operators
    console.log(ss);
}

//addData();

findData();