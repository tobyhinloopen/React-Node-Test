var VerticalKeyValueEntry = require('vertical_key_value_entry');
var PriceLabel = require('price_label');
var Grid = require('grid');

module.exports = class HomeSearchResult extends React.Component {
  render() {
    return (
      <div className="house-search-result" data-wrap-link>
        <div className="-image-container">
          <img src={this.props.thumbnail} alt={this.props.label} width="100%" className="-image" />
        </div>
        <div className="-info-container">
          <a className="-info-label" data-font-resize-to-fit href={this.props.url}>{this.props.label}</a>
          <div className="-info-key-value-entries">
            <VerticalKeyValueEntry xs="4" label="Slaapkamers">{this.props.bedrooms}</VerticalKeyValueEntry>
            <VerticalKeyValueEntry xs="4" label="Bedden">{this.props.beds}</VerticalKeyValueEntry>
            <VerticalKeyValueEntry xs="4" label="Prijs p. persoon p. nacht">
              <PriceLabel value={this.props.average_price_person_night} />
            </VerticalKeyValueEntry>
          </div>
        </div>
      </div>
    );
  }
};
