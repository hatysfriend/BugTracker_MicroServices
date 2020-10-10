const mongoose = require('mongoose');

const refreshTokenSchema = new mongoose.Schema({
  refreshToken: { type: String, required: true },
  username: { type: String }
});

const model = mongoose.model('refreshToken', refreshTokenSchema);

module.exports = {
  refreshTokenSchema,
  model
};
