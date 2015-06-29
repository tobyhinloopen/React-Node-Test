import AdminDocument from 'layout/admin_document';
import Input from 'form/input';

export default class HouseFormDocument extends React.Component {
  render() {
    return (
      <AdminDocument title={this.props.title} activeNav="admin.houses">
        <form action="/admin/huizen" method="post">
          <Input name="url" label="padnaam" defaultValue="/123" />
        </form>
      </AdminDocument>
    )
  }
}
