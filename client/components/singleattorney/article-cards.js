import Link from 'next/link';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lineStyles from 'styles/LineHeader.module.css';

export default function ArticleCards({
  articles, title, type, id,
}) {
  return (
    <div id={id}>
      <div className={lineStyles.lineHeader}>
        <h3>{title}</h3>
      </div>
      <Row className="my-4">
        {articles.map((article) => (
          <Col sm={12} md={4} key={article.title} className="my-3">
            <Link href={article.link}>
              <a className="text-center mx-auto d-block">
                {type === 'articles' && (
                  <>
                    <Image
                      alt={article.title}
                      src={article.featuredImg || '/images/no-image-found-diamond.png'}
                      width={300}
                      height={150}
                      className="rounded"
                    />
                    <small className="text-dark d-block">
                      <strong>{article.title}</strong>
                    </small>
                  </>
                )}
                {type === 'awards' && (
                  <Image
                    alt={article.title}
                    src={article.featuredImg}
                    width={200}
                    height={200}
                    className="rounded"
                  />
                )}
              </a>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
