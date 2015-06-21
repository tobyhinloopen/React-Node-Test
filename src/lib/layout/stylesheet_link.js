module.exports = React.createClass({
  getDefaultProps: function() {
    return { type: "text/css", media: "all", rel: "stylesheet" };
  },

  render: function() {
    return <link
      href={this.props.src}
      media={this.props.media}
      rel={this.props.rel}
      type={this.props.type} />;
  }
});
