const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

const today = new Date();
const todayDay = today.getDay();
let dayName

switch (todayDay) {
  case 0:
    dayName = 'Sunday';
    break;
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
}

app.set('view engine', 'ejs');

app.get('/', (_, res) => {
  res.render('index', { dayName: dayName });
});

app.listen(6969, () => console.log('Server app.js listening on port 6969'));
