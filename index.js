const express = require('express');

const app = express();

const port =  3000 ;

app.use(express.static('./public'));

app.get('/three', (_, response) => response.sendFile(__dirname+'/node_modules/three/build/three.min.js'));

app.get('/orbit', (_, response) => response.sendFile(__dirname+'/node_modules/three/examples/js/controls/OrbitControls.js'));


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

