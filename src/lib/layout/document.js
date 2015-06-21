import JavascriptLink from 'layout/javascript_link';
import StylesheetLink from 'layout/stylesheet_link';
import Grid from 'grid';

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

let render = Document.render;
Document.renderWithDoctype = function() {
  return '<!DOCTYPE html>' + render.apply(this, arguments);
};

Document.defaultProps = {
  title: "",
  javascripts: ["/frontend.js"],
  stylesheets: ["/frontend.css"]
};

module.exports = Document;
