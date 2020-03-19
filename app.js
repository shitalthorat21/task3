const express = require('express');
const mongoose = require('mongoose');
const app = express();
const pug=require('pug');
var path = require('path');
const bodyParser = require('body-parser');
const routes = require('./index');
const errorHandlers = require('./errorHandlers');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);
app.use(errorHandlers.notFound);
app.use(errorHandlers.flashValidationErrors);

if (app.get('env') === 'development') {
  
  app.use(errorHandlers.developmentErrors);
}
module.exports = app;