import ResponsiveWildcardImage from 'responsive_wildcard_image'

export default class Logo extends React.Component {
  render() {
    return <ResponsiveWildcardImage src="/hinloopen-logo-*.png" widths={[360,240,180]} />;
  }
}
