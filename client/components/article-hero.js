/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from 'styles/ArticleHero.module.css';
import { formatDate, createMarkup, setTextLen } from 'utils/helpers';

export default function ArticleHero(content) {
  const { articles } = content;
  const articleList = articles.filter((_, i) => i !== 0);

  return (
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <Link href={articles[0].link}>
            <a className={styles.link}>
              <Image
                src={articles[0].better_featured_image.source_url.replace(
                  'Feature',
                  'Body',
                )}
                alt={articles[0].title.rendered}
                width={750}
                height={350}
                layout="intrinsic"
              />
              <h3 className={`${styles.mainArticleTitle} mt-3 mb-2`}>
                <strong>{articles[0].title.rendered}</strong>
              </h3>
            </a>
          </Link>
          <p>
            <strong>Published: </strong>
            <span className="mr-3">{formatDate(articles[0].date)}</span>
            <strong>Author: </strong>
            {articles[0]._embedded.author.map((a) => (
              <Link key={a.name} href={a.link.replace('wp.', '')}>
                <a className={styles.link}>{a.name}</a>
              </Link>
            ))}
          </p>
          <hr />
          <p
            dangerouslySetInnerHTML={createMarkup(
              articles[0].excerpt.rendered.replace('[…]', '...'),
            )}
          />
        </Col>
        <Col sm={12} md={6}>
          <ul className="list-unstyled">
            {articleList.map((article) => (
              <li key={article.id} className="d-flex mb-2">
                <Link href={article.link}>
                  <a className={`${styles.link} ${styles.list}`}>
                    <img
                      src={article.better_featured_image.source_url}
                      alt={article.title.rendered}
                      width="125px"
                      height="58px"
                      layout="intrinsic"
                      className="rounded"
                    />
                    <div className={styles.listArticleTitle}>
                      <h5 className="mb-1">
                        <strong>{article.title.rendered}</strong>
                      </h5>
                      <p className="mt-0 pt-0">
                        <small>
                          {setTextLen(
                            article.excerpt.rendered
                              .replace('<p>', '')
                              .replace('</p>', ''),
                            100,
                          )}
                        </small>
                      </p>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
