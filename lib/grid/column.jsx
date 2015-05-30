module.exports = React.createClass({
  render: function() {
    var classnames = '';
    if(this.props.xs) classnames += ' col-xs-'+this.props.xs;
    if(this.props.sm) classnames += ' col-sm-'+this.props.sm;
    if(this.props.md) classnames += ' col-md-'+this.props.md;
    if(this.props.lg) classnames += ' col-lg-'+this.props.lg;
    return <div className={classnames}>{this.props.children}</div>;
  }
});
