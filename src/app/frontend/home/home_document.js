import Document from 'layout/document';

export default class HomeDocument extends React.Component {
  render() {
    return (
      <Document title={this.props.title}>
        <h1>Hello {this.props.name}</h1>
      </Document>
    );
  }
}
