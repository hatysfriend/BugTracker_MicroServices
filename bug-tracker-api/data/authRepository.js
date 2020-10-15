const authSchema = require('./authSchemas');
const database = require('./database');

module.exports = (() => {
  const UserModel = authSchema.userModel;

  database.GetDbInstance();

  async function _getUser(userQuery) {
    return UserModel.findOne(userQuery);
  }

  async function _deleteCollection() {
    await UserModel.deleteMany();
  }

  async function _insertUser(user) {
    console.log('Trouble');
    const userModel = new UserModel(user);
    return userModel.save();
  }

  return {
    GetUser(userQuery) {
      return _getUser(userQuery);
    },
    DeleteCollection() {
      return _deleteCollection();
    },
    InsertUser(user) {
      return _insertUser(user);
    }
  };
})();
