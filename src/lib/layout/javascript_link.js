export default class JavascriptLink extends React.Component {
  render() {
    return <script src={this.props.src} type="text/javascript" />;
  }
}
