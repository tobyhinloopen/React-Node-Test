import Grid from 'grid';

export default class LayoutWithSidebar extends Grid.Row {};

LayoutWithSidebar.Sidebar = class Sidebar extends React.Component {
  render() {
    return <Grid.Column md="3">{this.props.children}</Grid.Column>;
  }
}

LayoutWithSidebar.Content = class Content extends React.Component {
  render() {
    return <Grid.Column md="9">{this.props.children}</Grid.Column>;
  }
}

