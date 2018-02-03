module.exports = function(app, db) {
  app.get('/', function(req, res) {
    db.collection('users').find().toArray(function(err, docs) {
        res.send(docs);
    });
  });
};
