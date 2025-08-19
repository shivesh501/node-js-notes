const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

//initalizing the myEmitter object
const myEmitter = new MyEmitter();

// add listener for the log event
myEmitter.on('log', (msg)=>logEvents(msg));

setTimeout(() => {
    //emit event
    myEmitter.emit('log','Log event emitted!');
    ///if we have more than one parameter i.e. apart from message we can just add them beside the message
},2000);


