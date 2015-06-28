export default class Item extends React.Component {
  render() {
    return (
      <li className={this.props.active && "active"}>
        <a href={this.props.href}>{this.props.children}</a>
      </li>
    );
  }
}
