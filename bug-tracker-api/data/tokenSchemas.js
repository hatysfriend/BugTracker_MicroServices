const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  }
});

const tokenModel = mongoose.model('tokens', tokenSchema);

module.exports = {
  tokenModel
};
