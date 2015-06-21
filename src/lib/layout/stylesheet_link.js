export default class StylesheetLink extends React.Component {
  render() {
    return <link href={this.props.src} media="all" rel="stylesheet" type="text/css" />;
  }
};
