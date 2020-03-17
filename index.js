const express = require('express');
const router = express.Router();
const app = express();
const pug=require('pug');
var path=require('path');
const port=8008;
const bodyParser=require('body-parser');
const userController=require('./userController');
app.use(router);
app.set('view engine', 'pug'); 
app.set('views', path.join(__dirname, './views'));
app.use(bodyParser.json());
const {catchErrors}=require('./errorHandlers');

require ('./models/User');

router.get('/users', catchErrors(userController.getUsers));
// router.post('/users', userController.users);

router.get('/add', userController.addUser);
router.post('/add', catchErrors(userController.createUser));

const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' });

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/qliktagInterns', function(err, db) {
  if (err) throw err;
  const dbo = db.db("qliktagInterns");
    dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

app.listen(port, () => {
      console.log("server listen on port:"+port);
    });

    module.exports = router;