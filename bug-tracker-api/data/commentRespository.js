const mongoose = require('mongoose');
const bugObject = require('./bugSchemas');
const database = require('./database');

module.exports = (() => {
  const BugModel = bugObject.bugModel;

  database.GetDbInstance();

  async function _getAllComments(bugId) {
    const bug = await BugModel.findById(bugId).populate('comments.user');
    return bug.comments;
  }

  async function _deleteCommentByID(bugId, commentId) {
    const bug = await BugModel.findById(bugId);
    bug.comments.pull(commentId);
    await bug.save();
  }

  async function _insertComment(bugId, comment) {
    const insert = {
      _id: mongoose.Types.ObjectId(),
      comment: comment.comment,
      user: comment.user,
      likes: comment.likes,
      date: comment.date,
    };
    const bug = await BugModel.findById(bugId);
    bug.comments.push(insert);
    await bug.save();
    return insert;
  }

  async function _updateComment(bugId, commentId, comment) {
    const set = {};
    for (const prop in comment) {
      if (Object.prototype.hasOwnProperty.call(comment, prop)) {
        set[`comments.$.${prop}`] = comment[prop];
      }
    }
    return BugModel.findOneAndUpdate(
      { _id: bugId, 'comments._id': commentId },
      { $set: set },
      { upsert: false, new: true, useFindAndModify: false },
    ).populate('comments.user');
  }

  return {
    GetAllComments(bugId) {
      return _getAllComments(bugId);
    },
    DeleteCommentByID(bugId, commentId) {
      return _deleteCommentByID(bugId, commentId);
    },
    InsertComment(bugId, comment) {
      return _insertComment(bugId, comment);
    },
    UpdateComment(bugId, commentId, comment) {
      return _updateComment(bugId, commentId, comment);
    },
  };
})();
