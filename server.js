const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('root route');
});

app.listen(PORT, (req, res) => {
  console.log(`Server listeing on ${PORT}`);
})
