import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lineStyles from 'styles/LineHeader.module.css';

export default function ArticleCards({ articles }) {
  return (
    <div id="news-&-articles">
      <div className={lineStyles.lineHeader}>
        <h3>News & Articles</h3>
      </div>
      <Row className="my-4">
        {articles.map((article) => (
          <Col sm={12} md={4} key={article.title}>
            <Card>
              <Card.Img variant="top" src={article.featuredImg} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card&pos;s content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Col sm={12} className="mt-5">
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
