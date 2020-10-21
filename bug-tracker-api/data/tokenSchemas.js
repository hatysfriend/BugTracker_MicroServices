const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true
  },
  userId: { type: mongoose.Schema.Types.ObjectId }
});

const tokenModel = mongoose.model('tokens', tokenSchema);

module.exports = {
  tokenModel
};
