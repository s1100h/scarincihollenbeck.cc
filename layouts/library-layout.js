import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PopularList from 'components/library/popular-list';
import MainArticle from 'components/library/main-article';
import FeaturedArticle from 'components/library/featured-article';
import OlderArticles from 'components/library/older-articles';
import FeaturedLinks from 'components/library/featured-links';
import QueryTitle from 'components/library/query-title';
import SubscriptionContainer from 'components/library/subscription-container';
import SearchBar from 'components/library/search-bar';
import { urlify } from 'utils/helpers';
import styles from 'styles/Library.module.css';
import marginStyles from 'styles/Margins.module.css';
import fontStyles from 'styles/Fonts.module.css';

export default function LibraryLayout({
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
  const onSubmit = async (e) => {
    e.preventDefault();
    const santizeTerm = urlify(searchTerm.replace(/[^a-zA-Z ]/g, ''));
    setLoading(true);

    await router.push({
      pathname: '/library/search',
      query: { term: santizeTerm },
    });

    await setLoading(false);
  };
  return (
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
          <QueryTitle title={pageTitle} />
          {results.results && results.results.length > 0 ? (
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
                      {`${results.results[0].title} - Legal practice details`}
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
              {results.results && results.results.length > 1 && (
                <ul className={`${marginStyles.mt65} list-unstyled`}>
                  <FeaturedArticle
                    articles={results.results.filter(
                      (_, i) => i > 0 && i <= 4,
                    )}
                  />
                </ul>
              )}
              <div className={marginStyles.mt65}>
                <SubscriptionContainer />
              </div>
              {results.results && results.results.length > 4 && (
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
                <Link href={`/library/author/${urlify(author.username)}`}>
                  <a className="text-dark">{author.fullName}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
