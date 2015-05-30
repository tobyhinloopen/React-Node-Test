var express = require('express');
var app = express();
var expressReactViews = require('express-react-views');

app.set('view engine', 'jsx');
app.engine('jsx', expressReactViews.createEngine({
  doctype: '<!DOCTYPE html>', beautify: false
}));

module.exports = app;
