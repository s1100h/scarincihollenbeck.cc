import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import textStyles from 'styles/Text.module.css';
import dynamic from 'next/dynamic';

const AttorneyCard = dynamic(() => import('components/shared/AttorneyCard'));

const AttorneyCards = (title, content) => (
  <Row>
    <Col sm={12} className="my-4">
      <h3 className={`${textStyles.redTitle} text-uppercase border-bottom mb-0`}>
        <strong>{title}</strong>
      </h3>
    </Col>
    {content.map((m) => (
      <Col key={m.link} sm={12} md={6} lg={4} className="mb-3">
        <AttorneyCard
          link={`/attorney${m.link}`}
          image={m.better_featured_image}
          name={m.title}
          title={m.designation}
          number={m.phone}
          email={m.email}
          width={80}
          height={112}
        />
      </Col>
    ))}
  </Row>
);

export default AttorneyCards;
