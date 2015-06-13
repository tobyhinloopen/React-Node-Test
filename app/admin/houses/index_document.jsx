var AdminDocument = require('layout/admin_document');
var HousesTable = require('./houses_table');

module.exports = class HomeDocument extends React.Component {
  render() {
    return (
      <AdminDocument title="Huizen" activeNav="admin.houses.index">
        <HousesTable houses={this.props.houses} />
      </AdminDocument>
    );
  }
}
