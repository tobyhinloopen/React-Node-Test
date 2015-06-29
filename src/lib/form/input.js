export default class Input extends React.Component {
  render() {
    return <div className="control-group">
      <label>{this.props.label}</label>
      <input type={this.props.type} className="form-control"
        name={this.props.name} placeholder={this.props.placeholder} defaultValue={this.props.defaultValue} />
    </div>;
  }
}

Input.defaultProps = { type: "text" };
