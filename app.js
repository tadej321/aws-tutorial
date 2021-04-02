// nodemodule imports
const express = require('express');

// project imports


const app = express();
const port = 8080 || 8080;

app.get('/', (req, res) => {
  res.send('Its working boyyyyyy');
})

app.listen(port, () => {
  console.log('hello')
})
