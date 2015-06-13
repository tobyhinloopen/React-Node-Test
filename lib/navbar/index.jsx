class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <a className="navbar-brand" href="/admin">Travel CMS</a>
        </div>
        <ul className="nav navbar-nav">{this.props.children}</ul>
      </nav>
    )
  }
};

Navbar.Item = require('./item');

module.exports = Navbar;
