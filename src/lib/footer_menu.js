export default class FooterMenu extends React.Component {
  render() {
    return (
      <div className="footer-menu">

        <div className="-action-section">
          <a href="#" className="-item">Contact</a>
          <a href="#" className="-item">Over ons</a>
        </div>

        <div className="-resources-section">
          <a href="#" className="-item">Groepsaccommodaties in Belgie</a>
          <a href="#" className="-item">Groepsaccommodaties in Duitsland</a>
          <a href="#" className="-item">Groepsaccommodaties in Oostenrijk</a>
          <a href="#" className="-item">Groepsaccommodaties in Ardennen</a>
        </div>

        <div className="-resources-section">
          <a href="#" className="-item">Groepsaccommodaties in Frankrijk</a>
          <a href="#" className="-item">Groepsaccommodaties in Spanje</a>
        </div>

      </div>
    );
  }
}
