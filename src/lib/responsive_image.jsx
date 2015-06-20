class ResponsiveImage extends React.Component {
  render() {
    var widths = Object.keys(this.props.versions).map(e => e|0).sort();
    var src = this.props.versions[widths[0]];
    var srcset = widths.map(w => `${this.props.versions[w]} ${w}w`).join(", ");
    return <img src={src} srcSet={srcset} />;
  }
}

module.exports = ResponsiveImage;
