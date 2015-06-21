import Document from './document';
import DoubleSidebarLayout from './double_sidebar_layout';
import LogoWithFooter from './logo_with_footer';
import FooterMenu from './footer_menu';
import TransparentHeader from './transparent_header'

export class FrontendDocument extends React.Component {
  render() {
    return (
      <Document title={this.props.title}>
        <div className="frontend-document-gradient-background" />
        <this.props.header />
        <DoubleSidebarLayout>{this.props.children}</DoubleSidebarLayout>
        <FooterMenu />
      </Document>
    )
  }
}

FrontendDocument.defaultProps = {
  header: TransparentHeader
};

export class Left extends React.Component {
  render() {
    return (
      <DoubleSidebarLayout.Left>
        <div className="house-document-sidebar-section">
          <LogoWithFooter />
        </div>
        {this.props.children}
      </DoubleSidebarLayout.Left>
    )
  }
}

export class Center extends DoubleSidebarLayout.Center {}
export class Right extends DoubleSidebarLayout.Right {}
export class Content extends DoubleSidebarLayout.Content {}
