import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LatestNewsArticlesCarousel from '../carousels/LatestNewsArticlesCarousel';

export default function FeaturedSlider(props) {
  const { content, title } = props;

  return (
    <div className="mt-4 w-100 d-block attorney-news-slider">
      <div className="line-header mb-3">
        <h3>
          {title}
          {' '}
        </h3>
      </div>
      <Container>
        <Row>
          <Col sm={12}>
            { (content.length > 3) ? <LatestNewsArticlesCarousel slides={content} /> : (
              <div className="d-flex flex-row">
                {content.map((c) => (
                  <a className="mx-3" href={c.link}>
                    <img src={c.featuredImg} width="230" alt={c.title} className="img-fluid" />
                  </a>
                )) }
              </div>
            )}
          </Col>
          {(title === 'Awards') && (
            <Col sm={12}>
              <a href="/awards">
                <a className="text-center d-block proxima-bold red-title">
                  Award Methodology
                </a>
              </a>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}