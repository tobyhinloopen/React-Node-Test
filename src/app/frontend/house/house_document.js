import Document from 'layout/document';
import DoubleSidebarLayout from 'double_sidebar_layout';
import TransparentHeader from 'transparent_header';
import LogoWithFooter from 'logo_with_footer';
import StaticImageMap from 'static_image_map';
import FooterMenu from 'footer_menu';

export default class HouseDocument extends React.Component {
  render() {
    return (
      <Document title={this.props.title}>
        <div className="house-document-gradient-background" />
        <TransparentHeader />
        <DoubleSidebarLayout>

          <DoubleSidebarLayout.Left>
            <div className="house-document-sidebar-section">
              <LogoWithFooter />
            </div>
            <div className="house-document-sidebar-menu-item">
              <a href="#de-woning">De woning</a>
            </div>
            <div className="house-document-sidebar-menu-item">
              <a href="#tuin">Omgeving</a>
            </div>
            <div className="house-document-sidebar-menu-item">
              <a href="#regio">Regio</a>
            </div>
            <div className="house-document-sidebar-menu-item">
              <a href="#kenmerken">Kenmerken</a>
            </div>
            <div className="house-document-sidebar-menu-item">
              <a href="#fotos">{"Foto's"}</a>
            </div>
          </DoubleSidebarLayout.Left>

          <DoubleSidebarLayout.Center>
            <div className="house-document-content-section">
              <h1 id="de-woning">{this.props.house.label}</h1>
              <p className="lead">{this.props.house.summary}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <h2 id="tuin">Tuin met grote barbeque en kampvuur</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <h2 id="regio">Veel zwem en fiets mogelijkheden</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </DoubleSidebarLayout.Center>

          <DoubleSidebarLayout.Right>
            <div className="house-document-sidebar-section-header">
              Groepsaccommodatie
            </div>
            <div className="house-document-sidebar-section">
              <img src={this.props.house.image} width="100%" alt={this.props.house.label} />
            </div>
            <div className="house-document-sidebar-section-header">
              Locatie
            </div>
            <div className="house-document-sidebar-section">
              <StaticImageMap width="320" height="384" scale="2" query={this.props.house.mapCenter} label="Teutoburgerwald" />
            </div>
          </DoubleSidebarLayout.Right>

        </DoubleSidebarLayout>

        <FooterMenu />

      </Document>
    );
  }
}
