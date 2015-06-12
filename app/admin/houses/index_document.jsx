var Document = require('layout/document');

module.exports = class HomeDocument extends React.Component {
  render() {
    return (
      <Document>
        <h1>Er zijn {this.props.houses.length} huizen!</h1>
      </Document>
    );
  }
}
