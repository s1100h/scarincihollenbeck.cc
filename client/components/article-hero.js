/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from 'styles/ArticleHero.module.css';
import { formatDate, createMarkup } from 'utils/helpers';

export default function ArticleHero(content) {
  const { articles } = content;
  const articleList = articles.filter((a,i) => i !== 0);
  console.log(articleList);
  return (
    <Container>
      <Row>
        <Col sm={12} md={7}>
          <Link href={articles[0].link}>
            <a className={styles.link}>
              <Image src={articles[0].better_featured_image.source_url.replace('Feature', 'Body')} alt={articles[0].title.rendered} width={750} height={350} layout="intrinsic" />
              <h3 className={`${styles.mainArticleTitle} mt-3 mb-2`}>
                <strong>
                  {articles[0].title.rendered}
                </strong>
              </h3>
            </a>
          </Link>
          <p>
            <strong>Published: </strong>
            <span className="mr-3">{formatDate(articles[0].date)}</span>
            <strong>Author: </strong>
            {articles[0]._embedded.author.map((a) => (
              <Link key={a.name} href={a.link.replace('wp.', '')}>
                <a className={styles.link}>
                  {a.name}
                </a>
              </Link>
            ))}
          </p>
          <hr />
          <p dangerouslySetInnerHTML={createMarkup(articles[0].excerpt.rendered.replace('[…]', '...'))} />
        </Col>
        <Col sm={12} md={5}>
          <ul className="list-unstyled">
            {articleList.map((article) => (
              <li key={article.id} className="mb-4 d-flex">
                <Link href={article.link}>
                  <a className={styles.link}>
                    <Image src={article.better_featured_image.source_url} alt={article.title.rendered} width={125} height={58} layout="intrinsic" className="rounded" />
                    <div><h5><strong>{article.title.rendered}</strong></h5></div>
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
