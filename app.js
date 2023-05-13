const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

const today = new Date();
const todayDay = today.getDay();
let dayName

if (todayDay === 0 || todayDay === 6) {
  dayName = 'weekend'
} else {
  dayName = 'weekday'
}

app.set('view engine', 'ejs');

app.get('/', (_, res) => {
  res.render('index', { dayName: dayName });
});

app.listen(6969, () => console.log('Server app.js listening on port 6969'));
