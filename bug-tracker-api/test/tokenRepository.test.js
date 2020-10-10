const { expect } = require('chai');
const tokenRepo = require('../data/tokenRepository');

const token = {
  token: 'ej39jflkjs0ialjk32knjf9jd09uj3knff=3kolf9ma',
  username: 'squirtle'
};

describe('Refresh Token Tests ->', () => {
  beforeEach(async () => {
    await tokenRepo.DeleteCollection();
  });

  describe('Insert Single Refresh Token', () => {
    it('Inserts A Comment Succesfully', () => {
      tokenRepo.InsertToken(token)
        .then((data) => {
          expect(data).to.not.equal(null);
          expect(data.username).to.be.eql('squirtle');
          expect(data.token).to.be.eql('ej39jflkjs0ialjk32knjf9jd09uj3knff=3kolf9ma');
        });
    });
  });

  describe('Delete Single Refresh Token', () => {
    it('Deletes A Single Token', async () => {
      await tokenRepo.InsertToken(token);
      const data = await tokenRepo.GetAll();
      expect(data.length).to.be.eql(1);

      await tokenRepo.DeleteToken(token.token);
      const data2 = await tokenRepo.GetAll();
      expect(data2.length).to.be.eql(0);
    });
  });

  describe('Get Single Refresh Token', () => {
    it('Gets Single Token', async () => {
      await tokenRepo.InsertToken(token);
      tokenRepo.GetTokenByUsername('squirtle')
        .then((data) => {
          expect(data).to.not.equal(null);
          expect(data.username).to.be.eql('squirtle');
          expect(data.token).to.be.eql('ej39jflkjs0ialjk32knjf9jd09uj3knff=3kolf9ma');
        });
      tokenRepo.GetAll()
        .then((data) => {
          expect(data.length).to.be.eql(1);
        });
    });
  });
});
