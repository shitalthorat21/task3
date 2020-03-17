const express = require('express');
const mongoose = require('mongoose');

const path = require('path');

const bodyParser = require('body-parser');

const routes = require('./index');
const errorHandlers = require('./errorHandlers');
const app = express();
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use(errorHandlers.notFound);
app.use(errorHandlers.flashValidationErrors);


if (app.get('env') === 'development') {
  
  app.use(errorHandlers.developmentErrors);
}

module.exports = app;