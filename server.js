'use strict';
////------REQUIRES-----////

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { request, response } = require('express');

const mongoose = require('mongoose');

////-----------bring in mongoose from docs---///////

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});


//-------USE/IMPLEMENT EXPRESS-------//
const app = express();
app.use(cors());

/////------DEFINE PORT VALIDATE ENV IS WORKING------/////

const PORT = process.env.PORT || 3002;


//------ENDPOINTS--------//

app.get('/test', (request, response) => {

  response.status(200).send('test request received');

});



app.get('*', (request, response)=>{
  response.status(404).send('not availiable');
});

//-------ERROR---------////

app.use((error, request, response, next)=>{
  response.status(500).send(error.message);
});



app.listen(PORT, () => console.log(`listening on ${PORT}`));
