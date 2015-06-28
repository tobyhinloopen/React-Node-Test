import Thead from './thead';
import Tbody from './tbody';

export default class Table extends React.Component {
  constructor(props) {
    super({});
    if(props.data)
      this.state = { data: props.data };
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
