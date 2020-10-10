const mongoose = require('mongoose');

const database = (() => {
  let dbInstance = null;

  const _getDbInstance = () => {
    const connectionString = process.env.CONNECTION || 'mongodb://mongo:27017/bugDB';
    // eslint-disable-next-line no-console
    console.log(`Database Connection: ${connectionString}`);

    if (!dbInstance) {
      // console.log("Creating New Instance");
      mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
        .then(() => {
          // console.log("connected");
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(`connection failed${err}`);
        });

      dbInstance = mongoose;
      return dbInstance;
    }

    // console.log("Instance Already Exists");
    return dbInstance;
  };

  return {
    GetDbInstance() {
      return _getDbInstance();
    },
  };
})();

module.exports = database;
