import Logo from 'logo';

export default class LogoWithFooter extends React.Component {
  render() {
    return (
      <a href="/" className="logo-with-footer">
        <span className="-logo-wrapper"><Logo /></span>
        <span className="-brand">Hinloopen Travel</span>
      </a>
    );
  }
}
