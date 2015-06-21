let ResponsiveImage = require('responsive_image');

class ResponsiveWildcardImage extends React.Component {
  render() {
    let versions = {};
    for(let width of this.props.widths)
      versions[width] = this.props.src.replace(/\*/g, ""+width);
    return <ResponsiveImage versions={versions} />;
  }
}

module.exports = ResponsiveWildcardImage;
