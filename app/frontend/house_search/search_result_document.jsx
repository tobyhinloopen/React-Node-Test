var Document = require('layout/document');
var HouseSearchResult = require('./house_search_result');

module.exports = React.createClass({
  render: function() {
    return (
      <Document title={this.props.title}>
        {this.props.results.map(function(result) {
          return <HouseSearchResult {...result} key={result.id} />;
        })}
      </Document>
    );
  }
});
