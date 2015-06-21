import TransparentHeader from 'layout/transparent_header';

export default class HouseHeader extends TransparentHeader {
  actions() {
    return [
      <a href="javascript:window.print();" className="-icon-btn">
        <span className="glyphicon glyphicon-print"></span>
        Print
      </a>,
      <a href="#" className="-icon-btn">
        <span className="glyphicon glyphicon-chevron-right"></span>
        Boek nu
      </a>
    ];
  }
}