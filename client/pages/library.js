import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { headers, urlify } from 'utils/helpers';
import styles from 'styles/Library.module.css';
import fontStyles from 'styles/Fonts.module.css';

export default function Library({
  results,
  authors,
  popularCategories,
  childrenOfCurrentCategory,
  pageTitle,
}) {
  const mainArticle = results.results[0];
  console.log(mainArticle);
  return (
    <>
      <NextSeo nofollow />
      <Container>
        <Row>
          <Col sm={12}>
            Bread crumbs
          </Col>
          <Col sm={12} md={3}>
            <p className={fontStyles.ft12rem}>
              <strong>{`${pageTitle} Categories`}</strong>
            </p>
            <ul className={styles.authorList}>
              {childrenOfCurrentCategory.map((category) => (
                <li key={category.id} className="list-unstyled">
                  <Link href={`/library?term=${category.slug}&page=1`}>
                    <a className="text-dark">
                      {category.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <p className={fontStyles.ft12rem}><strong>Popular Categories</strong></p>
            <ul className={styles.authorList}>
              {popularCategories.map((popular) => (
                <li key={popular.id} className="list-unstyled">
                  <Link href={`/library?term=${popular.slug}&page=1`}>
                    <a className="text-dark">
                      {popular.name}
                      {' '}
                      <strong>
                        <small>
                          {popular.postCount}
                        </small>
                      </strong>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col sm={12} md={7}>
            <div>
              
            </div>
          </Col>
          <Col sm={12} md={2}>
            <p className={fontStyles.ft12rem}><strong>Firm Authors</strong></p>
            <ul className={styles.authorList}>
              {authors.map((author) => (
                <li key={author.lastName} className={`${styles.author} list-unstyled`}>
                  <Link href={`/library?term=${author.username}&page=1`}>
                    <a className="text-dark">
                      {author.fullName}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { page, term } = query;
  const [results, authors, childrenOfCurrentCategory, popularCategories] = await Promise.all([
    fetch(`https://wp.scarincihollenbeck.com/wp-json/search/query/${urlify(term)}/${page}`, {
      headers,
    }).then((data) => data.json()),
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/author/full-list',
      { headers },
    ).then((data) => data.json()),
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/category/children/${urlify(term)}`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/category/popular-categories',
      { headers },
    ).then((data) => data.json()),
  ]);

  return {
    props: {
      pageTitle: term,
      results: results || [],
      authors: authors || [],
      popularCategories: popularCategories || [],
      childrenOfCurrentCategory: childrenOfCurrentCategory || [],
    },
  };
}
