/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from 'styles/ArticleHero.module.css';
import { formatDate, createMarkup, setTextLen } from 'utils/helpers';

export default function ArticleHero({ content }) {
  const articleList = content.filter((_, i) => i !== 0);

  return (
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <Link href={content[0].link}>
            <a className={styles.link}>
              <Image
                src={content[0].better_featured_image.source_url.replace(
                  'Feature',
                  'Body',
                )}
                alt={content[0].title.rendered}
                width={750}
                height={350}
                layout="intrinsic"
              />
              <h3 className={`${styles.mainArticleTitle} mt-3 mb-2`}>
                <strong>{content[0].title.rendered}</strong>
              </h3>
            </a>
          </Link>           
          <p>
            <strong>Published: </strong>
            <span className="mr-3">{formatDate(content[0].date)}</span>
            <strong>Author: </strong>
            {content[0]._embedded.author.map((a) => (
              <a key={a.name} href={a.link.replace('wp.', '')} className={styles.link}>{a.name}</a>
            ))}
          </p>
          <hr />
          <p
            dangerouslySetInnerHTML={createMarkup(
              setTextLen(content[0].excerpt.rendered, 220),
            )}
          />
        </Col>
        <Col sm={12} md={6}>
          <ul className="list-unstyled">
            {articleList.map((article) => (
              <li key={article.id} className="d-flex mb-2">
                  <a href={article.link} className={`${styles.link} ${styles.list}`}>
                    <img
                      src={article.better_featured_image.source_url}
                      alt={article.title.rendered}
                      width={125}
                      height={58}
                      className="rounded"
                    />
                    <div className={styles.listArticleTitle}>
                      <h5 className="mb-1">
                        <strong
                          dangerouslySetInnerHTML={createMarkup(
                            article.title.rendered.toString(),
                          )}
                        />
                      </h5>
                      <p className={`mt-0 pt-0 ${styles.listArticleExcerpt}`}>
                        <small
                          dangerouslySetInnerHTML={createMarkup(
                            setTextLen(
                              article.excerpt.rendered
                                .replace('<p>', '')
                                .replace('</p>', ''),
                              130,
                            ),
                          )}
                        />
                      </p>
                    </div>
                  </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
