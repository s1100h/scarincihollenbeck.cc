import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lineStyles from 'styles/LineHeade./carousels/latest-news
import LatestNewsArticlesCarousel from './carousels/latest-news-articles-carousel';

export default function NewsScroller({ title, articles }) {
  return (
    <Container>
      <Row>
        <Col sm={12} className="mb-3">
          <div className={lineStyles.lineHeader}>
            <h3>{title}</h3>
          </div>
        </Col>
        <Col sm={12} className="py-4">
          <LatestNewsArticlesCarousel slides={articles} />
        </Col>
      </Row>
    </Container>
  );
}
