export default class StaticImageMap extends React.Component {
  render() {
    let url = '//maps.googleapis.com/maps/api/staticmap?';
    url += `size=${this.props.width}x${this.props.height}&`;
    url += `scale=${this.props.scale}&`;
    url += `center=${escape(this.props.query)}&`;
    url += 'zoom=4&maptype=terrain&';
    url += 'style=element:labels|visibility:off&style=feature:road|visibility:off&';
    url += 'style=feature:all|saturation:-100|lightness:25&';
    url += 'style=feature:water|saturation:-100|lightness:95';

    let imgStyle = {
      marginLeft: -this.props.width/2,
      marginTop: -this.props.height/2
    }

    return (
      <div className="static-image-map">
        <i className="-marker" />
        <div className="-label">
          <i className="-label-arrow" />
          {this.props.label}
        </div>
        <div className="-map">
          <img src={url} width={this.props.width} height={this.props.height} style={imgStyle} />
        </div>
      </div>
    );
  }
}
