var ResponsiveWildcardImage = require('responsive_wildcard_image');

class Logo extends React.Component {
  render() {
    return <ResponsiveWildcardImage src="/hinloopen-logo-*.png" widths={[360,240,180]} />;
  }
}

module.exports = Logo;
