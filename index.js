'use strict';
require('use-strict');

var express     = require('express');
var app         = express();
var dev_port    = 3000;

// Request logger
var morgan = require('morgan');
app.use(morgan('dev'));


// Register Handlebars template engine
var hbs = require('express-handlebars');
app.engine('.hbs', hbs({
        defaultLayout: 'base',
        extname: '.hbs',
        layoutsDir: './public/views/layouts',
        partialsDir: './public/views/partials'
    })
);
app.set('view engine', '.hbs');
app.set('views', __dirname + '/public/views');

// Setup express static
app.use('/static', express.static('public'));


// Register app routes
app.use(require('./app/routes'));

// Start listening for requests
var port = process.env.NODE_ENV == 'production' ? 80 : dev_port;
app.listen(port);
console.log('Listening on port ' + port);