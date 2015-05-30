var React = require('react');
var Document = require('layout/document');

module.exports = React.createClass({
  render: function() {
    return (
      <Document title={this.props.title}>
        <h1>Hello {this.props.name}</h1>
      </Document>
    );
  }
});
