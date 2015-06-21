require('array_extensions');

export default class Thead extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }

  render() {
    return React.createElement('thead', null, this.renderHeadRow());
  }

  renderHeadRow() {
    return React.createElement('tr', null,
      ...this.getHeadLabels().map(headLabel => React.createElement('th', null, headLabel)));
  }

  getHeadLabels() {
    return this.state.data.map(row => Object.keys(row)).flatten().unique();
  }
}
