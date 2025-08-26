const EventEmitter = require("events");

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('called',()=>{
    console.log("EVent Emmiter")
})

myEmitter.emit("called");