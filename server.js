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

app.post('/user', userController.createAndFind);

// Heroku will inject product env variables
// Will redirect any unknown routes, and will send index.html as a response
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

io.on('connection', (socket) => {
  console.log('connected');
  socket.emit('socketID', socket.id);

  socket.on('update-all', () => {
    socket.broadcast.emit('update');
  });

  socket.on('disconnect', () => {
    userController.deleteUser(socket.id);
    io.emit('update');
  });
});

server.listen(PORT);
