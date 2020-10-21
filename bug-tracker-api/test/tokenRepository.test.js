const { expect } = require('chai');
const tokenRepo = require('../data/tokenRepository');
const authRepo = require('../data/authRepository');

let tokenProp;
let userProp;

describe('Refresh Token Tests ->', () => {
  beforeEach(async () => {
    await authRepo.DeleteCollection();
    await tokenRepo.DeleteCollection();
    const user = {
      username: 'squirtle',
      password: 'muppet'
    };
    userProp = await authRepo.InsertUser(user);
    const token = {
      token: 'ej39jflkjs0ialjk32knjf9jd09uj3knff=3kolf9ma',
      userId: userProp._id
    };
    tokenProp = await tokenRepo.InsertToken(token);
  });

  describe('Insert Single Refresh Token', () => {
    it('Inserts A Comment Succesfully', () => {
      tokenRepo.InsertToken(tokenProp)
        .then((data) => {
          expect(data).to.not.equal(null);
          expect(data.userId).to.be.eql(userProp._id);
          expect(data.token).to.be.eql('ej39jflkjs0ialjk32knjf9jd09uj3knff=3kolf9ma');
        });
    });
  });

  describe('Delete Single Refresh Token', () => {
    it('Deletes A Single Token', async () => {
      await tokenRepo.InsertToken(tokenProp);
      const data = await tokenRepo.GetAll();
      expect(data.length).to.be.eql(1);

      await tokenRepo.DeleteToken(tokenProp.token);
      const data2 = await tokenRepo.GetAll();
      expect(data2.length).to.be.eql(0);
    });
  });

  describe('Get Single Refresh Token', () => {
    it('Gets Single Token', async () => {
      await tokenRepo.InsertToken(tokenProp);
      tokenRepo.GetTokenByUserId(userProp._id)
        .then((data) => {
          expect(data).to.not.equal(null);
          expect(data.userId).to.be.eql(userProp._id);
          expect(data.token).to.be.eql('ej39jflkjs0ialjk32knjf9jd09uj3knff=3kolf9ma');
        });
      tokenRepo.GetAll()
        .then((data) => {
          expect(data.length).to.be.eql(1);
        });
    });
  });
});
