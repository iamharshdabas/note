const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

const today = new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"});

app.set('view engine', 'ejs');

app.get('/', (_, res) => {
  res.render('index', { today: today});
});

app.listen(6969, () => console.log('Server app.js listening on port 6969'));
