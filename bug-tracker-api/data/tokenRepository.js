const tokenSchema = require('./tokenSchemas');
const database = require('./database');

module.exports = (() => {
  const TokenModel = tokenSchema.tokenModel;

  database.GetDbInstance();

  async function _getTokenByUserId(userId) {
    return TokenModel.findOne({ userId });
  }

  async function _getToken(token) {
    return TokenModel.findOne({ token });
  }

  async function _insertToken(token) {
    const tokenModel = new TokenModel(token);
    return tokenModel.save();
  }

  async function _deleteTokenByUserId(userId) {
    await TokenModel.deleteMany({ userId });
  }

  async function _deleteToken(token) {
    await TokenModel.deleteOne({ token });
  }

  async function _deleteCollection() {
    await TokenModel.deleteMany();
  }

  async function _getAllTokens() {
    return TokenModel.find();
  }

  return {
    GetTokenByUserId(userId) {
      return _getTokenByUserId(userId);
    },
    GetToken(token) {
      return _getToken(token);
    },
    InsertToken(token) {
      return _insertToken(token);
    },
    DeleteTokenByUserId(userId) {
      return _deleteTokenByUserId(userId);
    },
    DeleteToken(token) {
      return _deleteToken(token);
    },
    DeleteCollection() {
      return _deleteCollection();
    },
    GetAll() {
      return _getAllTokens();
    }
  };
})();
