import React from 'react'
import { useEffect, useState, useMemo} from 'react';
import {io} from "socket.io-client";
import {Container, Typography, TextField,Button,Box, Stack} from '@mui/material'
const App = () => {
  /*give the url of the backend for the socket
   Memoizes the socket connection to ensure that it is only created once when the component mounts
This prevents the socket connection from being recreated on every render, improving performance. */
  const socket = useMemo(()=>io('http://localhost:3000', {
    withCredentials: true,
  }),[]);

  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('');
  const [socketID, setSocketId] = useState("")
  const [messages, setMessages] = useState([]);
  const [roomName, setRoomName] = useState("");


  const handleSubmit = (e)=>{
    e.preventDefault();
    socket.emit("message",{message,room});
    setMessage("");
    
  }
  const joinRoomHandler = (e)=>{
    e.preventDefault();
    socket.emit("join-room",roomName);
    setRoomName("");
  }

  useEffect(()=>{
    socket.on("connect",()=>{
      console.log("connected")
      console.log("ID ",socket.id)
      setSocketId(socket.id);
    })//this will be triggerged when we connect, it will do anything on the client side
    socket.on("welcome",(s)=>console.log(s));
    
    //the message on being received is printed in the respective socket
    socket.on("receive-message",(data)=>{
      setMessages((messages)=>[...messages,data]);
    })


    return ()=>{socket.disconnect();}
  },[]);

  return (
    <Container maxWidth="sm">
      

      <Typography variant="h1" component="div" gutterBottom>
        Welcome to Socket.io
      </Typography>
    <Box sx= {{height: 300}} />
    <Typography variant="h6" component="div" gutterBottom>
      {socketID}
    </Typography>

    <form onSubmit={joinRoomHandler}>
      <h5>Join room</h5>
        <TextField 
        value={roomName}
        onChange ={e=>setRoomName(e.target.value)}
        id="outlined-basic" 
        label="Room Name" 
        variant="outlined"/>
         <Button type="submit" variant="contained" color="primary">Join</Button>
    </form>

      <form onSubmit={handleSubmit}>
        <TextField 
        value={message}
        onChange ={e=>setMessage(e.target.value)}
        id="outlined-basic" 
        label="Message" 
        variant="outlined"/>
         <TextField 
        value={room}
        onChange ={e=>setRoom(e.target.value)}
        id="outlined-basic" 
        label="Room" 
        variant="outlined"/>
        <Button type="submit" variant="contained" color="primary">Send</Button>
      </form>

      <Stack>
        {
          messages.map((m,i)=>(
            <Typography key={i}  variant="h6" component="div" gutterBottom>
              {m}
            </Typography>
          ))
        }
      </Stack>
    </Container>
  )
}

export default App
