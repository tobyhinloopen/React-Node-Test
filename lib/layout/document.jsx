var JavascriptLink = require('layout/javascript_link');
var StylesheetLink = require('layout/stylesheet_link');
var Grid = require('grid');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      title: "",
      javascripts: ["frontend.js"],
      stylesheets: ["frontend.css"]
    };
  },

  render: function() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          {this.props.javascripts.map(function(src) {
            return <JavascriptLink src={src} key={src} />;
          })}
          {this.props.stylesheets.map(function(src) {
            return <StylesheetLink src={src} key={src} />;
          })}
        </head>
        <body>
          <Grid.Container>
            <Grid.Row>
              <Grid.Column md={3} />
              <Grid.Column md={9}>{this.props.children}</Grid.Column>
            </Grid.Row>
          </Grid.Container>
        </body>
      </html>
    );
  }
});
