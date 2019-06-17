// Our imported libraries
const express = require('express');
// Assigning Express to an app contstant
const app = express();
// This maintains our home path
const path = require('path');
// Our Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// Our routes
const routes = require('./routes.js');
app.use('/', routes);
// Starting our server on port 4000
app.listen((process.env.PORT || 4000), () => console.log('Listening on 4000'));