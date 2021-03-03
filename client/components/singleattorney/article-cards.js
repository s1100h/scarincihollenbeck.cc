import Link from 'next/link';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lineStyles from 'styles/LineHeader.module.css';

export default function ArticleCards({ articles }) {
  console.log(articles);
  return (
    <div id="news-&-articles">
      <div className={lineStyles.lineHeader}>
        <h3>News & Articles</h3>
      </div>
      <Row className="my-4">
        {articles.map((article) => (
          <Col sm={12} md={4} key={article.title} className="mx-0 px-0 my-3">
            <Link href={article.link}>
              <a>
                <Image
                  alt={article.title}
                  src={article.featuredImg}
                  width={300}
                  height={150}
                />
              </a>
            </Link>
          </Col>
        ))}
        <Col sm={12} className="mx-0 px-0 mt-3">
          <Link href="/">
            <a className="btn btn-danger px-3 mb-4" style={{ fontSize: '1.3rem' }}>
              More News Articles
            </a>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
