const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

require('./services/passportConfig'); // Ensure this is required to load the passport configuration

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/teevroflix', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'../client/build')));

// Express session
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.post('/api/login', passport.authenticate('local'), (req, res) => {
  res.send('Logged in');
});

// Other routes...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
