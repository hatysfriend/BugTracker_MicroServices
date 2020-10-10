const seedData = require('../data/seedData');
const repository = require('../data/bugRepository');

const seed = async () => {
  const bugs = seedData.initialBugs;
  await repository.InsertBugCollection(bugs);
};

module.exports = {
  create_bug: async (req, res) => {
    const bug = {
      name: 'Testy New Bug',
      author: 'Thomas',
      status: 'Failed',
      description: 'Will It Blend',
      tags: [{ name: 'Nice', colour: 'info' }],
      date: '01/01/2020',
      comments: [],
    };
    await repository.InsertSingleBug(bug);
    res.redirect('/bugs');
  },

  seed_data: async (req, res) => {
    await seed();
    res.redirect('/bugs');
  },
};
