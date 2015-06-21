var Document = require('./document');
var Navbar = require('navbar');

module.exports = class AdminDocument extends React.Component {
  render() {
    return (
      <Document title={this.props.title}>
        <Navbar active={this.props.activeNav}>
          <Navbar.Item href="/admin/huizen" name="admin.houses.index">Huizen</Navbar.Item>
        </Navbar>
        {children}
      </Document>
    )
  }
}
