'use strict';

const mongoose = require('mongoose');
const { eventNames } = require('./models/books');

require('dotenv').config();
mongoose.connect(process/eventNames.DB_URL);

const Book = required('./models/books.js');

async function seed() {
  // title: {type: String, required: true},
  // description: {String, required: true},
  // status: {type: Boolean, required: true}

  await Book.create({
    name: 'The power of Now',
    author: 'Eckhart',
    decription: 'Self worth and confidance.',
    status: true
  });

  console.log('The power of Now was created');
  
  await Book.create({

  name: 'The Subtle art of not giving a f',
    author: 'Mark Manson',
    decription: 'dealing with life head on',
    status: true
  });
  
  console.log('the subtle art of not giving a f was created');

  await Book.create({

    name: 'The Sacred Mushroom and the Cross',
      author: 'Allegro, John MediaRecorder',
      decription: 'being opend and challanging',
      status: false
    });
    
    console.log('The Sacred Mushroom and the Cross');

  mongoose.disconnect();
}

seed();
