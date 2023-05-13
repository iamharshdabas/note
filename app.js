const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const today = new Date().toLocaleDateString('en-us', { weekday: 'long', month: 'long', day: 'numeric' });
let items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (_, res) => {
  res.render('index', {
    today: today,
    items: items
  });
});

app.post('/', (req, res) => {
  items.push(req.body.item);
  res.redirect('/');
});

app.listen(6969, () => console.log('Server app.js listening on port 6969'));
