const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors : {
        origin: 'http://localhost:5173', 
        methods: ['GET', 'POST'],
    },
});


app.use(cors());


io.on('connection', (socket) => {
    console.log('New Client connected');

    socket.on('message', (message) => {
        console.log('Message received:', message);
        io.emit('message', message); 
    });


    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
})


const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

