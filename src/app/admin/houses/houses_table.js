import Table from 'table';

export default class HousesTable extends Table {
  constructor(props) {
    super({});
    if(props.houses)
      this.state = { data: props.houses };
  }
}
