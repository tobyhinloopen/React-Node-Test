require('app-module-path').addPath(__dirname + '/lib');
require('app-module-path').addPath(__dirname + '/app');
require('node-jsx').install();

global.React = require('react');
global.express = require('express');

var app = express();

app.use(require('morgan')('dev'));

app.use(express.static('assets'));
app.use(express.static('public'));
app.use(express.static('bower_components/bootstrap-sass/assets/fonts/bootstrap'));

app.use(require('cookie-parser')());

var server = app.listen(process.argv[process.argv.length-1]|0||3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});

app.use('/', require('frontend'));
