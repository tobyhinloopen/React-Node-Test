require('babel/polyfill');
global.React = require('react');
global.express = require('express');

React.Component.render = function render(options) {
  return React.renderToStaticMarkup(React.createElement(this, options));
};
