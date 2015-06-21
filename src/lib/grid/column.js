module.exports = class Column extends React.Component {
  getClassNames() {
    var classNames = [];
    if(this.props.xs) classNames.push('col-xs-'+this.props.xs);
    if(this.props.sm) classNames.push('col-sm-'+this.props.sm);
    if(this.props.md) classNames.push('col-md-'+this.props.md);
    if(this.props.lg) classNames.push('col-lg-'+this.props.lg);
    return classNames;
  }

  render() {
    return <div className={this.getClassNames().join(" ")}>{this.props.children}</div>;
  }
}
