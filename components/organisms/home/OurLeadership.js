import dynamic from 'next/dynamic';
import { Row, Col } from 'react-bootstrap';
import lineStyles from 'styles/LineHeader.module.css';

const Leader = dynamic(() => import('components/molecules/home/Leader'));

export default function HomeOurLeadership({ leaders }) {
  return (
    <Row className="mt-5">
      <Col sm={12} className="my-5">
        <div className={lineStyles.lineHeader}>
          <h3>Our Leadership</h3>
        </div>
      </Col>
      {leaders.map((leader) => (
        <Leader key={leader.title} {...leader} />
      ))}
    </Row>
  );
}
