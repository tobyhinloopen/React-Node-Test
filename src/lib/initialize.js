require('babel/polyfill');
global.React = require('react');
global.express = require('express');

React.Component.render = function render(options) {
  return React.renderToStaticMarkup(React.createElement(this, options));
};

React.Component.renderWithDoctype = function() {
  let html = this.render.apply(this, arguments);

  console.log(html, html.substr(0, 6), html.substr(-7));
  if(html.substr(0, 6) == '<html>' && html.substr(-7) == '</html>')
    html = html.substring(6, html.length - 7);

  return '<!DOCTYPE html>' + html;
};
