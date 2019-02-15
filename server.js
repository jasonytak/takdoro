const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const keys = require('./config/keys');
const userController = require('./models/userController');

mongoose.connect(keys.mongoURI);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/time', (req, res) => {
  res.locals.mins = new Date().getMinutes();
  res.locals.secs = new Date().getSeconds();
  res.send(res.locals);
});

app.post('/user', userController.saveAndFind);

// Heroku will inject product env variables
// Will redirect any unknown routes, and will send index.html as a response
if (process.env.NODE === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT);
