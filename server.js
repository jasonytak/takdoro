const express = require('express');

const app = express();

const server = require('http').Server(app);

const io = require('socket.io')(server);

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const keys = require('./config/keys');
const userController = require('./models/userController');

// Connects to mongo DB
mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// Route to send back a standard global time to client
app.get('/time', (req, res) => {
  res.locals.mins = new Date().getMinutes();
  res.locals.secs = new Date().getSeconds();
  res.send(res.locals);
});

// Route to save user initials and retreive list of current users
app.post('/user', userController.createUser);

app.get('/find', userController.findCurrentUsers);

// Heroku will inject product env variables
// Will redirect any unknown routes, and will send index.html as a response
if (process.env.NODE === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('hello', () => console.log('HELLO'));
  socket.on('disconnect', () => console.log('Client disconnected'));
});

server.listen(PORT);
