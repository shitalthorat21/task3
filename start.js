const mongoose = require('mongoose');
mongoose.Promise=global.Promise;

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/qliktagInterns1', function(err, db) {
  if (err) throw err;
  const dbo = db.db("qliktagInterns1");
    dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});


require('dotenv').config({ path: '.env' });

require('./models/User');


const app = require('./app');
app.set('port', process.env.PORT || 8008);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});