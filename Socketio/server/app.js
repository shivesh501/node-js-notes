import express from 'express';
import cors from "cors"
import {createServer} from "http";
//integrating socket.io in our express app
import { Server } from 'socket.io';
//for authentication
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

//creating a basic server 
const port = 3000;
const app = express();

//creates a new http server from the express app
const server = createServer(app);
/*
 Attach Socket.IO to the HTTP server to enable real-time, bidirectional communication
 between the server and the clients. This allows us to send/receive events and data in real-time over WebSockets.

 next we specify the options
 The server will accept WebSocket connections from any origin, as CORS is configured with { origin: "*" }.
 This is useful during development but should be restricted to specific origins in production for security reasons. */
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);




const secretKeyJWT = "asdasdsadlfkwle";

app.get('/',(req,res)=>{
    res.send("Hello World!");
})

app.get('/login',(req, res)=>{
   const token =  jwt.sign({_id:"adsadsad"}, secretKeyJWT);
     res
    .cookie("token", token, { httpOnly: true, secure: true, sameSite: "none" })
    .json({
      message: "Login Success",
    });
});

/* adding a middleware for authentication... we can do other things by adding middle wares here*/

 io.use((socket, next) => {
  cookieParser()(socket.request, socket.request.res, (err) => {
    if (err) return next(err);

    const token = socket.request.cookies.token;
    if (!token) return next(new Error("Authentication Error"));

    const decoded = jwt.verify(token, secretKeyJWT);
    next();
  });
});

io.on("connection",(socket)=>{
    console.log("USer Connected");
    console.log(`Socket id = ${socket.id}`);
    /*
    socket.emit("welcome",`Welcome to the server ${socket.id}`);// when the welcome event is triggered "welcome to the server is passed"
    socket.broadcast.emit("welcome",`${socket.id} has joined the server !`);//.broadcast will emit it to all the sockets except the current one(i.e the socket that triggered the welcome event)
   
    // normally we dont emit from the backend.. we add a listener and then emit from that...
    // we emit generally from front end
    */ 

    /*when a message is sent in a socket.. we broadcast it to other sockets.. */
    socket.on("message", ({room, message})=>{
        console.log({room,message});
        //socket.broadcast.emit("receive-message",data);  //this is to broadcast all other sockets
        /* if we want to send it to a particular socket then we use .to()  and specify the socket ID of the 
        room to which we want to send the message to */

        //now i am sending the message to all the sockets present in "room" and except the sending socket
        socket.to(room).emit("receive-message", message);

        /* note: io.to() creates a broadcast operator that sends to all sockets in given room
               but socket.to() targets all sockets except the sender

               also note: every socket joins a room of its own socket.id by default... hence on doing socket.to() or io.to() 
               to the socket.id has the same effect as only that socket is present in the room "socket.id"
        */
    })
    
     socket.on("join-room", (room) =>{
        socket.join(room);// use to join the given room
        console.log(`User joined room: ${room}`);
     })
    socket.on("disconnect",()=>{
        console.log("USer disconnected", socket.id);
        })
    })




server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})