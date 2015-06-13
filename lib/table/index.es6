var Thead = require('./thead');
var Tbody = require('./tbody');

module.exports = class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }

  render() {
    return React.createElement('table', { className: 'table table-condensed' },
      this.renderHead(), this.renderBody());
  }

  renderHead() {
    return React.createElement(Thead, { data: this.state.data });
  }

  renderBody() {
    return React.createElement(Tbody, { data: this.state.data });
  }
}
