const bcrypt = require('bcryptjs');

async function comparePassword(userPassword, databasePassword) {
  return bcrypt.compare(userPassword, databasePassword);
}

async function createEncryptedUser(username, password) {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);
  const user = {
    username,
    password: hash
  };
  return user;
}

module.exports = {
  comparePassword,
  createEncryptedUser
};
