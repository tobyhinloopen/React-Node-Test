module.exports = React.createClass({
  getDefaultProps: function() {
    return { type: "text/javascript" };
  },

  render: function() {
    return <script src={this.props.src} type={this.props.type} />;
  }
});
