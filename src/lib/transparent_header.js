export default class TransparentHeader extends React.Component {
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

        <div className="-right">
          <a href="javascript:window.print();" className="-icon-btn">
            <span className="glyphicon glyphicon-print"></span>
            Print
          </a>

          <a href="#" className="-icon-btn">
            <span className="glyphicon glyphicon-chevron-right"></span>
            Boek nu
          </a>
        </div>
      </div>
    );
  }
}
