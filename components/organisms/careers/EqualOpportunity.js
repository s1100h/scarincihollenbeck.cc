import { Container, Row, Col } from 'react-bootstrap';
import lineStyles from 'styles/LineHeader.module.css';
import basicStyles from 'styles/BasicContent.module.css';
import { createMarkup } from 'utils/helpers';

const EqualOpportunity = ({ content }) => (
  <>
    <div className={lineStyles.lineHeader}>
      <h3>Equal Employment Opportunity</h3>
    </div>
    <Container className="mt-4">
      <Row>
        <Col
          sm={12}
          className={basicStyles.content}
          dangerouslySetInnerHTML={createMarkup(content)}
        />
      </Row>
    </Container>
  </>
);

export default EqualOpportunity;
