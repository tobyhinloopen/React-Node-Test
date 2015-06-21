export default class TransparentHeader extends React.Component {
  actions() {}

  render() {
    return (
      <div className="transparent-header">
        <div className="-left">
          <a href="tel:+31612401357" className="-icon-btn">
            <span className="glyphicon glyphicon-earphone"></span>
            06 1240 1357
          </a>

          <a href="mailto:info@hinloopen.nl" className="-icon-btn">
            <span className="glyphicon glyphicon-email"></span>
            info@hinloopen.nl
          </a>
        </div>

        <div className="-right">{this.actions()}</div>
      </div>
    );
  }
}
