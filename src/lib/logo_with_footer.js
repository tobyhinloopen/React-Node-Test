import Logo from 'logo';

export default class LogoWithFooter extends React.Component {
  render() {
    return (
      <div className="logo-with-footer">
        <div className="-logo-wrapper"><Logo /></div>
        <div className="-brand">Hinloopen Travel</div>
      </div>
    );
  }
}
