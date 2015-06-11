class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
  }

  render() {
    return <div className="control-group">
      <label>{this.props.label}</label>
      <input type={this.props.type} className="form-control"
        name={this.props.name} placeholder={this.props.placeholder} value={this.state.value} />
    </div>;
  }
}

Input.defaultProps = { type: "text" };

module.exports = Input;
