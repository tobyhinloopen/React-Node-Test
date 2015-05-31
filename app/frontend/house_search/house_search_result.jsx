module.exports = React.createClass({
  render: function() {
    return (
      <div className="house-search-result" data-wrap-link>
        <div className="-image-container">
          <img src={this.props.thumbnail} alt={this.props.label} width="100%" />
        </div>
        <div className="-info-container">
          <a className="-info-label" href={this.props.url}>{this.props.label}</a>
        </div>
      </div>
    );
  }
});
