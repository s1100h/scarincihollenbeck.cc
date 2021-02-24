import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PopularList from 'components/library/popular-list';
import MainArticle from 'components/library/main-article';
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
      <Container className="border">
        <Row>
          <Col sm={12}>
            Bread crumbs
          </Col>
          <Col sm={12} md={4} className="d-flex flex-column justify-content-start">
            {childrenOfCurrentCategory.length > 0 && <PopularList term="Related Categories" list={childrenOfCurrentCategory} />}
            <PopularList term="Popular Categories" list={popularCategories} />
          </Col>
          <Col sm={12} md={6}>
            <MainArticle title={mainArticle.title} link={mainArticle.link} description={mainArticle.longerDescription} date={mainArticle.date} image={mainArticle.image.replace('Feature', 'Body')} author="Temp Author" />
          </Col>
          <Col sm={12} md={2} className="d-flex flex-column justify-content-end text-right">
            <p className={`${fontStyles.ft12rem} d-block w-100`}><strong>Firm Authors</strong></p>
            <ul className={styles.authorList}>
              {authors.map((author) => (
                <li key={author.lastName} className={`${styles.author} list-unstyled`}>
                  <Link href={`/library?term=${author.username}`}>
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
  const { term } = query;
  const [results, authors, childrenOfCurrentCategory, popularCategories] = await Promise.all([
    fetch(`https://wp.scarincihollenbeck.com/wp-json/search/query/${urlify(term)}/1`, {
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
