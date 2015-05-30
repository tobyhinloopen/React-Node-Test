var express = require('express');
var expressReactViews = require('express-react-views');

module.exports = function() {
  var app = express();
  app.set('view engine', 'jsx');
  app.engine('jsx', expressReactViews.createEngine({
    doctype: '<!DOCTYPE html>', beautify: false
  }));
  return app;
};
