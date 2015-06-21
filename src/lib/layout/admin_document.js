import Document from './document';
import Navbar from 'navbar';

export default class AdminDocument extends React.Component {
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
