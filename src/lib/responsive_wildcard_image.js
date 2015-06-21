import ResponsiveImage from 'responsive_image'

export default class ResponsiveWildcardImage extends React.Component {
  render() {
    let versions = {};
    for(let width of this.props.widths)
      versions[width] = this.props.src.replace(/\*/g, ""+width);
    return <ResponsiveImage versions={versions} />;
  }
}
