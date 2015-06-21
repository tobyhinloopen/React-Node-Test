export default class DoubleSidebarLayout extends React.Component {
  render() {
    return <div className="double-sidebar-layout">{this.props.children}</div>
  }
};

DoubleSidebarLayout.Left = class Left extends React.Component {
  render() {
    return <div className="-left">{this.props.children}</div>;
  }
}

DoubleSidebarLayout.Right = class Right extends React.Component {
  render() {
    return <div className="-right">{this.props.children}</div>;
  }
}

DoubleSidebarLayout.Center = class Center extends React.Component {
  render() {
    return <div className="-center">{this.props.children}</div>;
  }
}

DoubleSidebarLayout.Content = class Content extends React.Component {
  render() {
    return <div className="-content">{this.props.children}</div>;
  }
}
