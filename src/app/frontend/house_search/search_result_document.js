import Document from 'layout/document';
import HouseSearchResult from './house_search_result';
import LayoutWithSidebar from 'layout/layout_with_sidebar';
import Input from 'form/input';

export default class SearchResultDocument extends React.Component {
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
