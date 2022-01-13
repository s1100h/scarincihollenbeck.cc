import { Row, Col } from 'react-bootstrap';
import { createMarkup } from 'utils/helpers';
import lineStyles from 'styles/LineHeader.module.css';

const MainTabs = ({ tabs }) => tabs.map(({ subtitle, title, content }) => (
  <Row key={title} style={{ marginTop: '-32px' }}>
    <Col sm={12} className="mt-5 mb-0 pb-0">
      <div className={lineStyles.lineHeader}>
        <h3>{subtitle}</h3>
      </div>
    </Col>
    <Col sm={12} className="text-center mt-5 mb-0 pb-0">
      <span dangerouslySetInnerHTML={createMarkup(content)} style={{ fontSize: '1.1rem' }} />
    </Col>
  </Row>
));

export default MainTabs;
