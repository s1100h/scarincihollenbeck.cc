import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from '../../../components/carousel';
import { addRandomKey } from '../../../utils/helpers';

export default function RelatedArticles(props) {
  const { title, content } = props;

  return (
    <div className="mt-4 w-100 d-block attorney-news-slider">
      <div className="line-header mb-4">
        <h3>{title}</h3>
      </div>
      {
        (content.length > 3) ? (
          <div className="featured-article-attorney-container">
            <Carousel sliderType="LargeArticle" slides={content} />
          </div>
        ) : (
          <Container>
            <Row>
              { content.map((v) => (
                <Col sm={12} md={4} key={addRandomKey(v.title)} className="article-card">
                  <a href={v.link}>
                    <img src={(v.featuredImg) ? v.featuredImg : noImg} alt={v.title} width="230" className="img-thumbnail mt-3" />
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
