module.exports = React.createClass({
  render: function() {
    return (
      <div className="house-search-result" data-wrap-link>
        <div className="-image-container">
          <img src={this.props.thumbnail} alt={this.props.label} width="100%" />
        </div>
        <div className="-info-container">
          <a className="-info-label" data-font-resize-to-fit href={this.props.url}>{this.props.label}</a>
          
        </div>
      </div>
    );
  }
});

// id: 1,
// url: '/du471',
// code: 'DU471',
// label: 'Duitsland in de Nederrijn bij Venlo',
// beds: 30,
// bedrooms: 10,
// average_price_person_night: 3800,
// thumbnail: '/du471.jpg'