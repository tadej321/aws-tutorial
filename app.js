// nodemodule imports
const express = require('express');

// project imports


const app = express();

app.get('/', (req, res) => {
  res.send('Its working boyyyyyy');
})

app.listen(4000, () => {
  console.log('hello')
})
