const express = require('express');
const chroma = require('chroma-log');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const bugRouter = require('./routes/bug-routes');
const authRouter = require('./routes/auth-routes');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use(chroma);

app.use('/auth', authRouter);
app.use('/bugs', bugRouter);

module.exports = app;
