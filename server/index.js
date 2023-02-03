const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const photoRouter = require('./routes/photo.route');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello, world!');
})

app.use('/photo', photoRouter);

app.listen(process.env.PORT || 3000, () => {
  mongoose.set('strictQuery', true)
  mongoose.connect(process.env.MONGODB_KEY);
  console.log(`Listening on port ${process.env.PORT ? process.env.PORT : 3000}`);
});