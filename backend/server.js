const express = require('express');
const app = express(); //instanciando express

const rooms = ['general', 'games', 'futbol', 'study'];
const cors = require('cors');
const { Console } = require('console');

app.use(express.urlencoded({extended:true})); //para recibir data del frontend
app.use(express.json());
app.use(cors());

require('./connection')

//crear el server
const server = require('http').createServer(app);
const PORT = 5001;
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'], 
    }
})
//comunic back
server.listen(PORT, ()=>{
    console.log('listening to port', PORT);

})
