// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const products = require('./products');

app.use(cors());

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  res.json(product);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
