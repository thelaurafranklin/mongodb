import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import phraseRouter from './routes/phrase.js';

const app = express();

// Mongoose setup
import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
const URI = process.env.MONGO_URI;

main().catch((err) => console.error(err));
async function main() {
  await mongoose.connect(URI);
}

// Handle __dirname is not defined errors
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

export default app;
