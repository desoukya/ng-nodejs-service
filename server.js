require('dotenv').config()

const express = require('express');
const app  = express();
const mongo = require('./db');
const PORT = process.env.PORT;

app.listen(PORT, function() {
  console.log(`[OK] = HTTP Server listening on: http://localhost:${PORT}`);
  console.log('[OK] = Attempting to Establish DB Connection');
  mongo.createDbConnection(function(err, db) {
    if (err) {
      console.log('[ERR] = Could not Establish DB Connection =>', err);
    }
    console.log('[OK] = Ready to Accept HTTP Requests')
    require('./routes')(app, db);
  })
});