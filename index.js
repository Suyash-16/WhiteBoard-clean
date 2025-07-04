const express = require('express');
const { Socket } = require('socket.io');
const app = express();
const httpServer = require('http').createServer(app);
let io = require('socket.io')(httpServer);

app.use(express.static("public"));

let PORT = process.env.PORT || 8080 
httpServer.listen(PORT , ()=> console.log(`Server Started on Port ${PORT}`));