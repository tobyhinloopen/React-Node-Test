var Column = require('grid/column');

module.exports = class VerticalKeyValueEntry extends Column {
  render() {
    var classNames = this.getClassNames();
    classNames.push('vertical-key-value-entry');
    return (
      <div className={classNames.join(" ")}>
        <div className="-key">{this.props.label}</div>
        {this.props.children}
      </div>
    );
  }
};
