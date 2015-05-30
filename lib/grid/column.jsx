module.exports = React.createClass({
  render: function() {
    var classnames = [];
    if(this.props.xs) classnames.push('col-xs-'+this.props.xs);
    if(this.props.sm) classnames.push('col-sm-'+this.props.sm);
    if(this.props.md) classnames.push('col-md-'+this.props.md);
    if(this.props.lg) classnames.push('col-lg-'+this.props.lg);
    return <div className={classnames}>{this.props.children}</div>;
  }
});
