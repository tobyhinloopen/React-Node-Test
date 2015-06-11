var Document = require('layout/document');
var HouseSearchResult = require('./house_search_result');
var LayoutWithSidebar = require('layout_with_sidebar');
var Input = require('form/input');

module.exports = class SearchResultDocument extends React.Component {
  render() {
    return (
      <Document title={this.props.title}>
        <LayoutWithSidebar>
          <LayoutWithSidebar.Sidebar>
            <div className="search-result-document-sidebar">
              <Input name="filter" value="bar" label="Foo" />
            </div>
          </LayoutWithSidebar.Sidebar>
          <LayoutWithSidebar.Content>
            {this.props.results.map(result => <HouseSearchResult {...result} key={result.id} />)}
          </LayoutWithSidebar.Content>
        </LayoutWithSidebar>
      </Document>
    );
  }
}
