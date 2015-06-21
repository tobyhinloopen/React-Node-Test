module.exports = class Tbody extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }

  render() {
    return React.createElement('tbody', null,
      ...this.state.data.map(record => this.renderRow(record)));
  }

  renderRow(data) {
    return React.createElement('tr', null,
      ...Object.keys(data).map(key => React.createElement('td', null, data[key])));
  }
}
