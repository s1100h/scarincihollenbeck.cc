import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PopularList from 'components/library/popular-list';
import MainArticle from 'components/library/main-article';
import FeaturedArticle from 'components/library/featured-article';
import FeaturedLinks from 'components/library/featured-links';
import SearchBar from 'components/library/search-bar';
import SubscriptionContainer from 'components/library/subscription-container';
import { headers, urlify, makeTitle } from 'utils/helpers';
import styles from 'styles/Library.module.css';
import marginStyles from 'styles/Margins.module.css';
import fontStyles from 'styles/Fonts.module.css';

export default function Library({
  results,
  authors,
  popularCategories,
  childrenOfCurrentCategory,
  pageTitle,
}) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const mainArticle = results.results[0];
  const featuredArticles = results.results.filter((_, i) => i > 0 && i <= 4);

  // on submit
  const onSubmit = (e) => {
    e.preventDefault();
    const santizeTerm = urlify(searchTerm.replace(/[^a-zA-Z ]/g, ''));

    router.push({
      pathname: '/library',
      query: { term: santizeTerm },
    });
  };

  return (
    <>
      <NextSeo nofollow />
      <Container className="border mb-5">
        <Row>
          <SearchBar onChange={(e) => setSearchTerm(e)} searchTerm={searchTerm} onSubmit={onSubmit} />
          <FeaturedLinks />
          <Col sm={12} md={9}>
            <div className="my-3">
              <p className={`${fontStyles.ft12rem} d-block w-100`}>
                <strong>
                  Home | Library |
                  {' '}
                  <span className="text-capitalize">{pageTitle.replace(/-/g, ' ')}</span>
                </strong>
              </p>
            </div>
            {(results.results.length > 0 && results.results) ? (
              <>
                <MainArticle title={mainArticle.title} link={mainArticle.link} description={mainArticle.longerDescription} date={mainArticle.date} image={mainArticle.image.replace('Feature', 'Body').replace('Featured', 'Body')} author={mainArticle.author} />
                <ul className={`${marginStyles.mt65} list-unstyled`}>
                  <FeaturedArticle articles={featuredArticles} />
                </ul>
                <div className={`${marginStyles.mt65}`}>
                  <SubscriptionContainer />
                </div>
                <span>Archives will go here...</span>
              </>
            ) : (
              <div className="text-center m-3">
                <h4>
                  <strong>
                    Sorry, no results found for
                    {' '}
                    {pageTitle}
                    {' '}
                    query.
                  </strong>
                </h4>
              </div>
            )}
          </Col>
          <Col sm={12} md={3} className="d-flex flex-column justify-content-start mt-3">
            {childrenOfCurrentCategory.length > 0 && <PopularList term="Related Categories" list={childrenOfCurrentCategory} />}
            <PopularList term="Popular Categories" list={popularCategories} />
            <p className={`${fontStyles.ft12rem} d-block w-100`}><strong>Firm Authors</strong></p>
            <ul className={styles.authorList}>
              {authors.map((author) => (
                <li key={author.lastName} className={`${styles.author} list-unstyled`}>
                  <Link href={`/library?term=${urlify(author.fullName.replace(/[^a-zA-Z ]/g, ''))}`}>
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
    fetch(`https://wp.scarincihollenbeck.com/wp-json/search/query/${(term) ? urlify(term) : 'firm-news'}/1`, {
      headers,
    }).then((data) => data.json()),
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/author/full-list',
      { headers },
    ).then((data) => data.json()),
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/category/children/${(term) ? urlify(term) : 'firm-news'}`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/category/popular-categories',
      { headers },
    ).then((data) => data.json()),
  ]);

  return {
    props: {
      pageTitle: (term) ? urlify(term) : 'firm-news',
      results: results || [],
      authors: authors || [],
      popularCategories: popularCategories || [],
      childrenOfCurrentCategory: childrenOfCurrentCategory || [],
    },
  };
}
