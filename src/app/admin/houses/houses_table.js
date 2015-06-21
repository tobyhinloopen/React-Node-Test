import Table from 'table';

export default class HousesTable extends Table {
  constructor(props) {
    super(props);
    this.state = { data: this.props.houses };
  }
}
