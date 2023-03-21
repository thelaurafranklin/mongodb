require('dotenv').config();
const express = require('express');
const path = require('path');

const phraseRouter = require('./routes/phrase');

const app = express();

// Mongoose setup
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const URI = process.env.MONGO_URI;

main().catch((err) => console.error(err));
async function main() {
  await mongoose.connect(URI);
}

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', phraseRouter);
app.use('/phrases', phraseRouter);

module.exports = app;
