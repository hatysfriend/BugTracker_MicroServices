const assert = require('assert');
const { expect } = require('chai');
const repo = require('../data/bugRepository');
const seedData = require('../data/seedData');

describe('BUG REPOSITORY TESTS ->', () => {
  beforeEach(() => {
    repo.DeleteCollection();
  });

  afterEach(() => {
    repo.DeleteCollection();
  });

  describe('InsertSingleBug() ->', () => {
    it('Returns Validation Error When Invalid Model Passed', (done) => {
      const dud = {
        dud: 'rubbish',
        filth: 'trash',
      };

      repo.InsertSingleBug(dud)
        .catch((err) => {
          assert.strictEqual(
            'bugs validation failed: status: Path `status` is required., author: Path `author` is required., name: Path `name` is required.',
            err.message
          );
          done();
        });
    });

    it('Returns Inserted Record When Successful', (done) => {
      const bug = {
        name: 'Testy New Bug',
        author: 'Thomas',
        status: 'Fixed',
        description: 'Will It Blend',
        tags: [{ name: 'cool', colour: 'info' }],
        date: new Date(2020, 7, 1),
        comments: [],
      };

      repo.InsertSingleBug(bug)
        .then((data) => {
          expect(data.name).to.be.equal(bug.name);
          expect(data.author).to.be.equal(bug.author);
          expect(data.status).to.be.equal(bug.status);
          expect(data.description).to.be.equal(bug.description);
          expect(data.date).to.be.equal(bug.date);
          done();
        });
    });
  });

  describe('GetAllBugs() ->', () => {
    it('Returns Not Null', (done) => {
      repo.InsertBugCollection(seedData.initialBugs);
      repo.GetAllBugs()
        .then((data) => {
          expect(data).to.not.equal(null);
          done();
        });
    });
  });
});
