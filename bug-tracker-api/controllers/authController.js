const jwt = require('jsonwebtoken');
const repo = require('../data/authRepository');
const authHelper = require('../authentication/authHelper');
const authenticator = require('../authentication/authenticator');
const tokenRepo = require('../data/tokenRepository');

require('dotenv').config();

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '20s' });
};

const generateRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
};

module.exports = {
  register_a_user_post: async (req, res) => {
    const user = await authHelper.createEncryptedUser(req.body.username, req.body.password);
    console.log(`trash${req.body.username}`);
    repo.InsertUser(user)
      .then(() => {
        console.log('Authenticatus');
        authenticator.authenticate(req.body.username, req.body.password)
          .then((userReturn) => {
            console.log('Success');
            res.status(201);
            res.json({
              message: 'Registration Succesful',
              user: userReturn
            });
          })
          .catch((err) => {
            console.log(`Failure${err}`);
            res.status(500).send({ error: err });
          });
      })
      .catch((err) => {
        let errMsg = err;
        if (err.code === 11000) {
          errMsg = 'That Username Is Already Taken';
          res.status(500).send(errMsg);
        }
        // res.status(500).send(errMsg);
        // eslint-disable-next-line no-console
        // console.log(`ERROR:${errMsg}`);
      });
  },

  login_a_user_post: (req, res) => {
    authenticator.authenticate(req.body.username, req.body.password)
      .then((userReturn) => {
        const user = {
          id: userReturn._id,
          username: userReturn.username
        };
        tokenRepo.DeleteTokenByUserId(user.id);
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        tokenRepo.InsertToken({ token: refreshToken, userId: user.id });
        res.status(200);
        res.json({ accessToken, refreshToken });
      })
      .catch((err) => {
        res.status(401).send({ error: err });
      });
  },

  refresh_token_post: async (req, res) => {
    const refreshToken = req.body.token;
    if (refreshToken == null) {
      return res.sendStatus(401);
    }
    const result = await tokenRepo.GetToken(req.body.token);
    if (result == null) {
      console.log('Unable to get Token');
      return res.sendStatus(403);
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) {
        console.log('Token not valid');
        return res.sendStatus(403);
      }
      const accessToken = generateAccessToken({ id: user.id, username: user.username });
      return res.json({ accessToken });
    });
  },

  invalidate_token_delete: (req, res) => {
    tokenRepo.DeleteToken(req.body.token);
    res.sendStatus(204);
  }
};
