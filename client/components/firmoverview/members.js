import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttorneyCard from 'components/attorney-card';
import textStyles from 'styles/Text.module.css';

export default function FirmOverviewMembers({ title, members, type }) {
  return (
    <div className="w-100 mt-5 px-3">
      <h3
        className={`${textStyles.redTitle} text-uppercase border-bottom mb-0`}
      >
        <strong>{title}</strong>
      </h3>
      <Container className="articles-container mt-3">
        <Row>
          {members.map((m) => (
            <Col sm={12} md={6} lg={4} className="mb-3" key={m.name}>
              <AttorneyCard
                link={m.uri}
                image={m.image}
                name={m.name}
                title={m.title}
                number={m.number}
                email={m.email}
                width={80}
                height={112}
                type={type}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
