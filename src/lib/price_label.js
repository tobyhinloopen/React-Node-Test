export default class PriceLabel extends React.Component {
  getFormattedPrice() {
    return this.props.value.toFixed(0).replace(/\d(?=(\d{3})+$)/g, '$&.');
  }

  render() {
    return <span className="price-label">€ {this.getFormattedPrice()}</span>;
  }
}
