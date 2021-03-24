/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ArticleHeroPage({ link, content }) {
  return (
    <Container>
      <Row className="my-4">
        {content
          .filter((_, i) => i <= 2)
          .map((article) => (
            <Col sm={12} md={4} key={article.title} className="my-3">
              <Link href={article.link}>
                <a className="text-center mx-auto d-block">
                  <Image
                    alt={article.title}
                    src={
                      article.featuredImg
                      || '/images/no-image-found-diamond.png'
                    }
                    width={300}
                    height={150}
                    className="rounded"
                  />
                  <small className="text-dark">
                    <strong>{article.title}</strong>
                  </small>
                </a>
              </Link>
            </Col>
          ))}
        {content.length >= 3 && (
          <Link href={`/library?term=${link}`}>
            <a
              className="btn btn-danger px-2 my-4 d-block"
              style={{ fontSize: '1.3rem', maxWidth: '200px' }}
            >
              More articles
            </a>
          </Link>
        )}
      </Row>
    </Container>
  );
}
