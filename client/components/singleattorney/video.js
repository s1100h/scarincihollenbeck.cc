import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createMarkup, formatDate } from 'utils/helpers';

export default function AttorneyProfileVideo({ content }) {
  return (
    <Container>
      <Row>
        {content.map((c) => (
          <Col sm={12} key={c.title}>
            <div dangerouslySetInnerHTML={createMarkup(c.embed_video)} />
            <h5 className="my-0 py-0 text-dark">
              <strong>{c.title}</strong>
            </h5>
            <p className="mt-2 text-dark">{formatDate(c.date)}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
