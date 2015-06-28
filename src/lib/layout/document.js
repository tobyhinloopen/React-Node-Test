import JavascriptLink from 'layout/javascript_link';
import StylesheetLink from 'layout/stylesheet_link';
import Grid from 'grid';

export default class Document extends React.Component {
  render() {
    return (
      <html>
        <title>{this.props.title}</title>
        {this.props.javascripts.map(src => <JavascriptLink src={src} key={src} />)}
        {this.props.stylesheets.map(src => <StylesheetLink src={src} key={src} />)}
        <Grid.Container>{this.props.children}</Grid.Container>
      </html>
    );
  }
};

Document.defaultProps = {
  title: '',
  javascripts: ['/frontend.js'],
  stylesheets: ['/frontend.css']
};
