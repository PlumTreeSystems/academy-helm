const express = require('express');

const app = express();
const port = 3000;


app.use(express.static('files'));

app.get('/', (req, res) => {
  if (!process.env.ACADEMY_VALUE_1 || process.env.ACADEMY_VALUE_1 && process.env.ACADEMY_VALUE_1 != 'it') {
    res.status('400').send('ACADEMY_VALUE_1 missing or is incorrect');
    return;
  }
  if (!process.env.ACADEMY_VALUE_2 || process.env.ACADEMY_VALUE_2 && process.env.ACADEMY_VALUE_2 != 'puts') {
    res.status('400').send('ACADEMY_VALUE_2 missing or is incorrect');
    return;
  }
  if (!process.env.ACADEMY_VALUE_3 || process.env.ACADEMY_VALUE_3 && process.env.ACADEMY_VALUE_3 != 'the') {
    res.status('400').send('ACADEMY_VALUE_3 missing or is incorrect');
    return;
  }
  if (!process.env.ACADEMY_VALUE_4 || process.env.ACADEMY_VALUE_4 && process.env.ACADEMY_VALUE_4 != 'lotion') {
    res.status('400').send('ACADEMY_VALUE_4 missing or is incorrect');
    return;
  }
  if (!process.env.ACADEMY_VALUE_5 || process.env.ACADEMY_VALUE_5 && process.env.ACADEMY_VALUE_5 != 'on') {
    res.status('400').send('ACADEMY_VALUE_5 missing or is incorrect');
    return;
  }
  if (!process.env.ACADEMY_VALUE_6 || process.env.ACADEMY_VALUE_6 && process.env.ACADEMY_VALUE_6 != 'its') {
    res.status('400').send('ACADEMY_VALUE_6 missing or is incorrect');
    return;
  }
  if (!process.env.ACADEMY_VALUE_7 || process.env.ACADEMY_VALUE_7 && process.env.ACADEMY_VALUE_7 != 'skin') {
    res.status('400').send('ACADEMY_VALUE_7 missing or is incorrect');
    return;
  }
  if (!process.env.ACADEMY_VALUE_8 || process.env.ACADEMY_VALUE_8 && process.env.ACADEMY_VALUE_8 != 'or') {
    res.status('400').send('ACADEMY_VALUE_8 missing or is incorrect');
    return;
  }
  if (!process.env.ACADEMY_VALUE_9 || process.env.ACADEMY_VALUE_9 && process.env.ACADEMY_VALUE_9 != 'it') {
    res.status('400').send('ACADEMY_VALUE_9 missing or is incorrect');
    return;
  }
  if (!process.env.ACADEMY_VALUE_10 || process.env.ACADEMY_VALUE_10 && process.env.ACADEMY_VALUE_10 != 'gets') {
    res.status('400').send('ACADEMY_VALUE_10 missing or is incorrect');
    return;
  }
  if (!process.env.ACADEMY_VALUE_11 || process.env.ACADEMY_VALUE_11 && process.env.ACADEMY_VALUE_11 != 'the') {
    res.status('400').send('ACADEMY_VALUE_11 missing or is incorrect');
    return;
  }
  if (!process.env.ACADEMY_VALUE_12 || process.env.ACADEMY_VALUE_12 && process.env.ACADEMY_VALUE_12 != 'hose') {
    res.status('400').send('ACADEMY_VALUE_12 missing or is incorrect');
    return;
  }
  if (!process.env.ACADEMY_VALUE_13 || process.env.ACADEMY_VALUE_13 && process.env.ACADEMY_VALUE_13 != 'again') {
    res.status('400').send('ACADEMY_VALUE_13 missing or is incorrect');
    return;
  }
  if (!process.env.ACADEMY_NAME) {
    res.status('400').send('ACADEMY_NAME missing');
    return;
  } else {
    res.send(process.env.ACADEMY_NAME + ' Works !');
  }
});

app.listen(port, () => {
  console.log('boop');
})
