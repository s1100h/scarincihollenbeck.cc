import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lineStyles from 'styles/LineHeader.module.css';

function AttorneyProfile({ attorney }) {
  return (
    <div>
      link
      image
      name
      chair, practice
    </div>
  ) 
}
export default function HomeOurLeadership( { attorneys }) {
  console.log(attorneys);
  return (
    <Row className="mt-5">
      <Col sm={12} className="mt-5 mb-0 pb-0">
        <div className={lineStyles.lineHeader}>
          <h3>Our Leadership</h3>
        </div>
        <Col sm={12} className="text-center mt-5 mb-0 pb-0">
          Attorneys here..
        </Col>
      </Col>
    </Row>
  );
}
