const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const socketio = require('socket.io');
const port = process.env.PORT || 3000


const server = http.createServer(app);
const io = socketio(server);
 
io.on('connection',(socket)=>{
    console.log("connection established");
    socket.on('join',(data)=>{
        console.log(data)
        let room=data['chatRooms'];
        let user=data['user'];
        data['message']="has joined";
        socket.join(room);
        socket.broadcast.to(room).emit('join',data);

    })
    socket.on('message',(data)=>{
        console.log(data);
        //io.in(room).emit
        io.in(data['chatRooms']).emit('messageemit',(data))
    })

})
server.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})