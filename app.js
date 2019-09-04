const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');

const db = require('./db').mongoURI;

// Connect to MongoDB
mongoose.connect(db,{ useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const sharks = require('./routes/sharks');
const booking = require('./routes/booking');

const path = __dirname + '/views/';
const port = 8080;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Express body parser
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path));

app.use('/booking', booking);
app.use('/sharks', sharks);

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})
