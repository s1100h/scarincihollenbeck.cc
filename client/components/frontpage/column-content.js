import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lineStyles from 'styles/LineHeader.module.css';
import About from 'components/frontpage/about';
import Practices from 'components/frontpage/practices';
import FrontPageCategories from 'components/frontpage/categories';

export default function FrontPageColumnContent({ corePractices }) {
  return (
    <Row>
      <Col sm={12} className="px-0">
        <div className={lineStyles.lineHeader}>
          <h3>ABOUT OUR FIRM</h3>
        </div>
      </Col>
      <Col sm={12} md={4} className="mt-5 border-right">
        <About />
      </Col>
      <Col sm={12} md={4} className="mt-5 border-right">
        <Practices corePractices={corePractices} />
      </Col>
      <Col sm={12} md={4} className="mt-5">
        <FrontPageCategories />
      </Col>
    </Row>
  );
}
