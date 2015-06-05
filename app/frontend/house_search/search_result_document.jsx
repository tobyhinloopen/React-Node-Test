var Document = require('layout/document');
var HouseSearchResult = require('./house_search_result');

module.exports = class SearchResultDocument extends React.Component {
  render() {
    return (
      <Document title={this.props.title}>
        {this.props.results.map(result => <HouseSearchResult {...result} key={result.id} />)}
      </Document>
    );
  }
}
