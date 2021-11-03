import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PopularList from 'components/organisms/library/popular-list';
import MainArticle from 'components/organisms/library/main-article';
import FeaturedArticle from 'components/organisms/library/featured-article';
import OlderArticles from 'components/organisms/library/older-articles';
import FirmAuthors from 'components/organisms/library/firm-authors';
import SubscriptionContainer from 'components/organisms/library/subscription-container';
import marginStyles from 'styles/Margins.module.css';

import { CLIENT_ALERTS } from 'utils/constants';

const filterNoPosts = (category) => category.filter((item) => item.postCount > 1);

export default function LibraryLayout({
  results,
  authors,
  popularCategories,
  childrenOfCurrentCategory,
  pageTitle,
  query,
}) {
  return (
    <Container className="border mb-5">
      <Row>
        <Col sm={12} md={9}>
          {results && results.length > 0 ? (
            <>
              {results[0].link.indexOf('attorneys') >= 0 ? (
                <Link href={results[0].link}>
                  <a className="border-bottom d-block pb-5">
                    <strong className="lead mt-5 d-block">
                      {results[0].title}
                      {' '}
                      - Attorney profile
                    </strong>
                  </a>
                </Link>
              ) : results[0].link.indexOf('practices') >= 0 ? (
                <Link href={results[0].link}>
                  <a className="border-bottom d-block pb-5">
                    <strong className="lead mt-5 d-block">
                      {`${results[0].title} - Legal practice details`}
                    </strong>
                  </a>
                </Link>
              ) : (
                <div className="mt-4">
                  <MainArticle
                    title={results[0].title}
                    link={results[0].link}
                    description={results[0].description}
                    date={results[0].date}
                    image={
                      results[0].image
                        ? results[0].image.replace('Feature', 'Body').replace('Featured', 'Body')
                        : '/images/no-image-found-diamond-750x350.png'
                    }
                    author={results[0].author}
                  />
                </div>
              )}
              {results && results.length > 1 && (
                <ul className={`${marginStyles.mt65} list-unstyled`}>
                  <FeaturedArticle articles={results.filter((_, i) => i > 0 && i <= 4)} />
                </ul>
              )}
              <div className={marginStyles.mt65}>
                <SubscriptionContainer />
              </div>
              {results && results.length > 4 && (
                <div className="mt-5">
                  <OlderArticles query={query} initialArticles={results.filter((_, i) => i > 4)} />
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
        <Col sm={12} md={3} className="d-flex flex-column justify-content-start mt-3">
          {childrenOfCurrentCategory.length > 0 && (
            <PopularList
              term="Related Categories"
              list={filterNoPosts(childrenOfCurrentCategory)}
              displayCount
            />
          )}
          <PopularList
            term="Popular Categories"
            list={filterNoPosts(popularCategories)}
            displayCount
          />
          <PopularList term="Client Alerts" list={CLIENT_ALERTS} displayCount={false} />
          <FirmAuthors authors={authors} />
        </Col>
      </Row>
    </Container>
  );
}
