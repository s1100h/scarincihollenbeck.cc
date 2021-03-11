import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ImageContent({ content }) {
  return (
    <Container className="mb-5">
      <Row>
        {content.map((c) => (
          <Col key={c.title} sm={12} md={4}>
            <Image
              src={c.featuredImg}
              alt={c.title}
              width={200}
              height={200}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
