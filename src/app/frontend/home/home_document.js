import {FrontendDocument, Left, Content} from 'layout/frontend_document';
import ContentTextArea from 'content_text_area';

export default class HomeDocument extends React.Component {
  render() {
    return (
      <FrontendDocument title={this.props.title}>
        <Left />
        <Content>
          <ContentTextArea>
            <h1>Hinloopen Travel biedt goedkope groepsaccommodaties in West Europa.</h1>
            <p className="lead">
              Wij faciliteren groepsaccommodaties in de omgeving van de Nederlandse grens voor
              ieder budget.
            </p>
          </ContentTextArea>
        </Content>
      </FrontendDocument>
    );
  }
}
