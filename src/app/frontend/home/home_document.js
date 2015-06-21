var Document = require('layout/document');

module.exports = class HomeDocument extends React.Component {
  render() {
    return (
      <Document title={this.props.title}>
        <h1>Hello {this.props.name}</h1>
      </Document>
    );
  }
}
