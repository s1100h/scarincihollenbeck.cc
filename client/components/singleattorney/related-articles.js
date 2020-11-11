import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LatestNewsArticlesCarousel from '../carousels/latest-news-articles-carousel';
import { addRandomKey } from '../../utils/helpers';

export default function RelatedArticles({ title, content }) {
  return (
    <div className="mt-4 w-100 d-block attorney-news-slider">
      <div className="line-header mb-4">
        <h3>{title}</h3>
      </div>
      {
        (content.length > 3) ? (
          <div className="featured-article-attorney-container">
            <LatestNewsArticlesCarousel slides={content} />
          </div>
        ) : (
          <Container>
            <Row>
              { content.map((v) => (
                <Col sm={12} md={4} key={addRandomKey(v.title)} className="article-card">
                  <a href={v.link}>
                    <img src={(v.featuredImg) ? v.featuredImg : "https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/sh-mini-diamond-PNG.png"} alt={v.title} width="230" className="img-thumbnail mt-3" />
                    <h5 className="my-3 small-excerpt">{v.title}</h5>
                  </a>
                </Col>
              ))}
            </Row>
          </Container>
        )
      }
    </div>
  );
}
