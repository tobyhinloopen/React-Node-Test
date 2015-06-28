import Document from './document';
import Navbar from 'navbar';

export default class AdminDocument extends React.Component {
  render() {
    return (
      <Document title={this.props.title}>
        <Navbar>
          <Navbar.Item href="/admin/huizen"
            active={this.props.activeNav == "admin.houses"}
          >Huizen</Navbar.Item>
        </Navbar>
        {this.props.children}
      </Document>
    )
  }
}
