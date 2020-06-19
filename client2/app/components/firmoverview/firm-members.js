import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttorneyCard from '../attorney-card';

export default function FirmMembers(props) {
  const { title, members, type, slug } = props;

  return (
    <div className="w-100 mt-5 px-3">
      <h4 className="red-title border-bottom text-uppercase">{title}</h4>
      <Container className="articles-container mt-3">
        <Row>
          {members.map((m) => (
            <Col sm={12} md={6} lg={4} className="mb-2" key={m.ID}>
              <AttorneyCard
                link={`/${slug}/${m.link}`}
                image={m.image}
                name={m.name}
                title={(title === 'Directors') ? m.title : m.designation}
                number={(title === 'Directors') ? `201-896-4100 ${m.extension}` : m.phone}
                email={m.email}
                height="auto"
                width="81px"
                type={type}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}