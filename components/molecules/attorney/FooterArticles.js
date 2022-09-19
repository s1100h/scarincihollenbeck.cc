import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

const FooterArticles = ({ articles }) => (
  <Row className="mt-5 mb-2">
    {articles.map((article) => (
      <Col sm={12} md={4} key={article.title}>
        <Link
          href={
            article.link[article.link.length - 1] === '/' ? article.link.slice(0, -1) : article.link
          }
        >
          <a className="mx-auto text-center text-dark">
            <div>
              <Image
                src={article.image}
                alt={article.title}
                width={300}
                height={150}
                layout="intrinsic"
              />
            </div>
            <p className="my-4">
              <strong>{article.title}</strong>
            </p>
          </a>
        </Link>
      </Col>
    ))}
  </Row>
);

export default FooterArticles;
