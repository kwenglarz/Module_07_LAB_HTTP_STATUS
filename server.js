const express = require('express');
const app = express();
const port = 3000;

app.get('/200', (req, res) => {
  res.status(200).send('OK: The request has succeeded');
});

app.get('/201', (req, res) => {
  res.status(201).send('Created: The request has been fulfilled and resulted in a new resource being created');
});

app.get('/400', (req, res) => {
  res.status(400).send('Bad Request: The server could not understand the request due to invalid syntax');
});

app.get('/404', (req, res) => {
  res.status(404).send('Not Found: The server can not find the requested resource');
});

app.get('/500', (req, res) => {
  res.status(500).send('Internal Server Error: The server has encountered a situation it doesn\'t know how to handle');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


