export default class Item extends React.Component {
  render() {
    return <li><a href={this.props.href}>{this.props.children}</a></li>;
  }
}
