const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  likes: [{
    user: { type: Schema.Types.ObjectId }
  }],
  date: { type: Date, default: Date.now() },
});

const model = mongoose.model('comments', commentSchema);

module.exports = {
  commentSchema,
  model
};
