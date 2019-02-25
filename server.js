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

app.get('/find', userController.findCurrentUsers);

app.post('/user', userController.createUser);

app.post('/test', (req, res) => {
  console.log('req', req.body);
  console.log('res', res.body);
});

// app.post('/delete', userController.deleteUser);

// Heroku will inject product env variables
// Will redirect any unknown routes, and will send index.html as a response
if (process.env.NODE === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

io.on('connection', (socket) => {
  console.log('connected');
  socket.emit('socketID', socket.id);
  socket.on('disconnect', () => console.log(socket.id));
  // socket.on('disconnect', () => {
  //   io.emit('deleteUser');
  // });
});

server.listen(PORT);
