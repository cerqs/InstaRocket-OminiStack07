const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require ('cors');

const app = express();



/* importa o http para var server */
const server = require('http').Server(app);

/* Importa o socket passando o http como param */ 
const io = require('socket.io')(server);



mongoose.connect('mongodb+srv://instaRocket:1234@cluster0-gq20c.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


/*Exporta para uso interno o req.io*/
app.use((req, res, next) => {
    req.io = io;
    next();
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname,'..','uploads','resized')));

app.use(require('./routes'));

server.listen(3333);



