import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleSubHeader from 'layouts/single-sub-header';
import PopularList from 'components/library/popular-list';
import MainArticle from 'components/library/main-article';
import FeaturedArticle from 'components/library/featured-article';
import OlderArticles from 'components/library/older-articles';
import FeaturedLinks from 'components/library/featured-links';
import QueryTitle from 'components/library/query-title';
import SubscriptionContainer from 'components/library/subscription-container';
import SearchBar from 'components/library/search-bar';
import { headers, urlify } from 'utils/helpers';
import styles from 'styles/Library.module.css';
import marginStyles from 'styles/Margins.module.css';
import fontStyles from 'styles/Fonts.module.css';

export default function Library({
  results,
  authors,
  popularCategories,
  childrenOfCurrentCategory,
  pageTitle,
  query,
}) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  // on submit
  const onSubmit = (e) => {
    e.preventDefault();
    const santizeTerm = urlify(searchTerm.replace(/[^a-zA-Z ]/g, ''));
    setLoading(true);

    router.push({
      pathname: '/library',
      query: { term: santizeTerm },
    });
  };

  return (
    <>
      <NextSeo nofollow />
      <SingleSubHeader
        image="/images/Legal-Research-1800x400-JPG.jpg"
        title="Article Library"
        subtitle="Scarinci Hollenbeck regularly publishes articles pertaining to legal updates affecting individuals and institutions in New York and New Jersey, and the world at large. Here you can find coverage for when we welcome new attorneys, significant wins we’ve secured on behalf of our clients, and general announcements. "
      />
      <Container className="border mb-5">
        <Row>
          <SearchBar
            onChange={(e) => setSearchTerm(e)}
            searchTerm={searchTerm}
            onSubmit={onSubmit}
            loading={loading}
          />
          <FeaturedLinks />
          <Col sm={12} md={9}>
            <QueryTitle title={pageTitle.replace(/-/g, ' ')} />
            {/* <Breadcrumbs parentCategory={results.parentCategory} pageTitle={pageTitle} /> */}
            {(results.results && results.results.length > 0) ? (
              <>
                {results.results[0].link.indexOf('attorneys') >= 0 ? (
                  <Link href={results.results[0].link}>
                    <a className="border-bottom d-block pb-5">
                      <strong className="lead mt-5 d-block">
                        {results.results[0].title}
                        {' '}
                        - Attorney profile
                      </strong>
                    </a>
                  </Link>
                ) : results.results[0].link.indexOf('practices') >= 0 ? (
                  <Link href={results.results[0].link}>
                    <a className="border-bottom d-block pb-5">
                      <strong className="lead mt-5 d-block">
                        {results.results[0].title}
                        {' '}
                        - Legal practice details
                      </strong>
                    </a>
                  </Link>
                ) : (
                  <div className="mt-4">
                    <MainArticle
                      title={results.results[0].title}
                      link={results.results[0].link}
                      description={results.results[0].longerDescription}
                      date={results.results[0].date}
                      image={
                        results.results[0].image
                          ? results.results[0].image
                            .replace('Feature', 'Body')
                            .replace('Featured', 'Body')
                          : '/images/no-image-found-diamond-750x350.png'
                      }
                      author={results.results[0].author}
                    />
                  </div>
                )}
                {(results.results && results.results.length > 1) && (
                  <ul className={`${marginStyles.mt65} list-unstyled`}>
                    <FeaturedArticle articles={results.results.filter((_, i) => i > 0 && i <= 4)} />
                  </ul>
                )}
                <div className={marginStyles.mt65}>
                  <SubscriptionContainer />
                </div>
                {(results.results && results.results.length > 4) && (
                  <div className="mt-5">
                    <OlderArticles
                      query={query}
                      initialArticles={results.results.filter((_, i) => i > 4)}
                    />
                  </div>
                )}
              </>
            ) : (
              <div className="text-center m-3">
                <h4>
                  <strong className="text-capitalize">
                    Sorry, no results found for
                    {' '}
                    <u>{pageTitle.replace(/-/g, ' ')}</u>
                    {' '}
                    query.
                  </strong>
                </h4>
              </div>
            )}
          </Col>
          <Col
            sm={12}
            md={3}
            className="d-flex flex-column justify-content-start mt-3"
          >
            {childrenOfCurrentCategory.length > 0 && (
              <PopularList
                term="Related Categories"
                list={childrenOfCurrentCategory}
              />
            )}
            <PopularList term="Popular Categories" list={popularCategories} />
            <p className={`${fontStyles.ft12rem} d-block w-100`}>
              <strong>Firm Authors</strong>
            </p>
            <ul className={styles.authorList}>
              {authors.map((author) => (
                <li
                  key={author.lastName}
                  className={`${styles.author} list-unstyled`}
                >
                  <Link href={`/library?author=${urlify(author.username)}`}>
                    <a className="text-dark">{author.fullName}</a>
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
  const { term, category, author } = query;
  // eslint-disable-next-line quotes
  let tempStr = ``;
  // eslint-disable-next-line quotes
  let tempChildCat = ``;

  if (term) {
    tempStr += `offset=1&term=${term}`;
    tempChildCat += term;
  }

  if (term && category) {
    tempStr += `offset=1&term=${term}&category=${category}`;
    tempChildCat += category;
  }

  if (category) {
    tempStr += `offset=1&category=${category}`;
    tempChildCat += category;
  }

  if (author) {
    tempStr += `offset=1&author=${author}`;
  }

  if (!term && !category && !author) {
    tempStr += 'offset=1&category=firm-news';
    tempChildCat += 'firm-news';
  }

  const [
    results,
    authors,
    childrenOfCurrentCategory,
    popularCategories,
  ] = await Promise.all([
    fetch(`https://wp.scarincihollenbeck.com/wp-json/v2/search/query?${tempStr}`, {
      headers,
    }).then((data) => data.json()),
    fetch('https://wp.scarincihollenbeck.com/wp-json/author/full-list', {
      headers,
    }).then((data) => data.json()),
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/category/children/${tempChildCat}`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/category/popular-categories',
      { headers },
    ).then((data) => data.json()),
  ]);

  // get authors full name to display
  if(author && results.results.length > 0) {
    tempChildCat += results.results[0].author;
  }

  return {
    props: {
      query: tempStr.replace('offset=1&', ''),
      pageTitle: tempChildCat,
      results: results || [],
      authors: authors || [],
      popularCategories: popularCategories || [],
      childrenOfCurrentCategory: childrenOfCurrentCategory || [],
    },
  };
}
