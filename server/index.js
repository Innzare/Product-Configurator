import express from 'express';
import {configurations} from './database/configurations.js';

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/configurations', (req, res) => {
  res.json({ configurations });
});

app.listen(8081, (err) => {
  if (err) {
    console.error('Error:', err)
  }
  console.log('Server runned');
});
