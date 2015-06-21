import AdminDocument from 'layout/admin_document';
import HousesTable from './houses_table';

export default class HomeDocument extends React.Component {
  render() {
    return (
      <AdminDocument title="Huizen" activeNav="admin.houses.index">
        <HousesTable houses={this.props.houses} />
      </AdminDocument>
    );
  }
}
