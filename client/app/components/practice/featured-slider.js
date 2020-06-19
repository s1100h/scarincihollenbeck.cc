import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SimpleNewsArticlesCarousel from '../carousels/simple-news-articles-carousel';
import { noImgFoundPNG } from '../../utils/next-gen-images';
import { addRandomKey } from '../../utils/helpers';

export default function FeaturedSlider(props) {
  const { content } = props;

  const firstEightArticles = content.filter((p, i) => i < 8);

  return (
    <div className="mt-4 w-100 d-block practice-news-list">
      {(firstEightArticles.length > 3) ? <SimpleNewsArticlesCarousel slides={firstEightArticles} /> : (
        <Container>
          <Row>
            {firstEightArticles.map((v) => (
              <Col sm={12} md={4} key={addRandomKey(v.title)} className="article-card">
                <a href={v.link}>
                  <img src={(v.image) ? v.image : noImgFoundPNG} alt={v.title} className="img-thumbnail mt-3" />
                  <h5 className="my-3 small-excerpt">{v.title}</h5>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
}