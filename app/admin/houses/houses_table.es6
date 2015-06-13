let Table = require('table');

module.exports = class HousesTable extends Table {
  constructor(props) {
    super(props);
    this.state = { data: this.props.houses };
  }
}
