export default class DoubleSidebarCenterPopupLayout extends React.Component {
  render() {
    return <div className="double-sidebar-center-popup-layout">{this.props.children}</div>
  }
};

DoubleSidebarCenterPopupLayout.Left = class Left extends React.Component {
  render() {
    return <div className="-left">{this.props.children}</div>;
  }
}

DoubleSidebarCenterPopupLayout.Right = class Right extends React.Component {
  render() {
    return <div className="-right">{this.props.children}</div>;
  }
}

DoubleSidebarCenterPopupLayout.Center = class Center extends React.Component {
  render() {
    return <div className="-center">{this.props.children}</div>;
  }
}
