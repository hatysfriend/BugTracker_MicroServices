const tokenSchema = require('./tokenSchemas');
const database = require('./database');

module.exports = (() => {
  const TokenModel = tokenSchema.tokenModel;

  database.GetDbInstance();

  async function _getTokenByUsername(username) {
    return TokenModel.findOne({ username });
  }

  async function _getToken(token) {
    return TokenModel.findOne({ token });
  }

  async function _insertToken(token) {
    const tokenModel = new TokenModel(token);
    return tokenModel.save();
  }

  async function _deleteTokenByUsername(username) {
    await TokenModel.deleteMany({ username });
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
    GetTokenByUsername(username) {
      return _getTokenByUsername(username);
    },
    GetToken(token) {
      return _getToken(token);
    },
    InsertToken(token) {
      return _insertToken(token);
    },
    DeleteTokenByUsername(username) {
      return _deleteTokenByUsername(username);
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
