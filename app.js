const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get('/', (req, res) => {
  res.send('Working')
});

app.listen(6969, () => console.log('Server app.js listening on port 6969'));
