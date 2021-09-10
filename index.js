const express = require('express');
const { Server }= require('socket.io');

const app = express();

const port =  3800 ;

app.use(express.static('./public'));

app.get('/three', (_, response) => response.sendFile(__dirname+'/node_modules/three/build/three.min.js'));

app.get('/orbit', (_, response) => response.sendFile(__dirname+'/node_modules/three/examples/js/controls/OrbitControls.js'));




const io = new Server(app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
}));

io.on('connection', (socket) => {
    console.log('connected');
    socket.on('demandeCube', (event)=>{
        //  console.log(event);
        io.emit('ajoutCube', event )
    });
});
