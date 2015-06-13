var JavascriptLink = require('layout/javascript_link');
var StylesheetLink = require('layout/stylesheet_link');
var Grid = require('grid');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

class Document extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          {this.props.javascripts.map(src => <JavascriptLink src={src} key={src} />)}
          {this.props.stylesheets.map(src => <StylesheetLink src={src} key={src} />)}
        </head>
        <body>
          <Grid.Container>{this.props.children}</Grid.Container>
        </body>
      </html>
    );
  }
};

Document.defaultProps = {
  title: "",
  javascripts: ["/frontend.js"],
  stylesheets: ["/frontend.css"]
};

module.exports = Document;
