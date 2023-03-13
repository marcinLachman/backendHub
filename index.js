import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use('/static/images', express.static('images'));

import connect from './connection.js';
connect();

import hubsRoutes from './routes/hubsRoutes.js';
// app.use("/", (req, res) => res.send('Wszystko działa'));
app.use("/api/v1", hubsRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Działa na porcie ${port}`);
})