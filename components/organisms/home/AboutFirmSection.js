import { Row, Col } from 'react-bootstrap';
import lineStyles from 'styles/LineHeader.module.css';
import { createMarkup } from 'utils/helpers';

const AboutFirmSection = ({ description, title }) => (
  <Row className="mt-5">
    <Col sm={12} className="mt-5 mb-0 pb-0">
      <div className={lineStyles.lineHeader}>
        <h3>{title}</h3>
      </div>
    </Col>
    <Col sm={12} className="text-center mt-5 mb-0 pb-0">
      <span dangerouslySetInnerHTML={createMarkup(description)} style={{ fontSize: '1.1rem' }} />
    </Col>
  </Row>
);

export default AboutFirmSection;
