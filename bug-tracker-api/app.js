// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const flash = require('connect-flash');
const express = require('express');
const chroma = require('chroma-log');
const bodyParser = require('body-parser');
const passport = require('passport');
const bugRouter = require('./routes/bug-routes');
const cors = require('cors');
// const commentRouter = require('./routes/comments-routes');
const authRouter = require('./routes/auth-routes');

const app = express();

// No cOokies or Session Data
// app.use(cookieParser());

// app.use(session({
//   secret: 'createSecretKey',
//   resave: false,
//   saveUninitialized: true
// }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
const corstOpt = {
  origin: 'http://localhost:8080'
}
app.use(cors(corstOpt));
// app.use(passport.session());

// No Flash Anymore
// app.use(flash());

app.use(chroma);

app.use('/auth', authRouter);
app.use('/bugs', bugRouter);
// app.use('/comments', commentRouter);

module.exports = app;
