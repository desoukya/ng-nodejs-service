const MongoClient = require('mongodb').MongoClient;
const MONGO_URI = process.env.MONGO_URI;
let dbConnection;

module.exports = {
  createDbConnection: function(cb) {
    MongoClient.connect(MONGO_URI, function(err, db) {
      if (err) {
        cb(new Error('Error fetching all users', err));
      }
      dbConnection = db;
      console.log('[OK] = Successfully Established DB Connection');
      cb(null, db);
    });
  },
  getDbConnection: function() {
    return dbConnection;
  }
}