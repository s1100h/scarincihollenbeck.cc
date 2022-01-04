import { useRouter } from 'next/router';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Container, Row, Col } from 'react-bootstrap';
import SingleSubHeader from 'layouts/SingleSubHeader';
import BodyHeader from 'components/organisms/library/body-header';
import MainArticle from 'components/organisms/library/main-article';
import FeaturedArticle from 'components/organisms/library/featured-article';
import PopularList from 'components/organisms/library/popular-list';
import FirmAuthors from 'components/organisms/library/firm-authors';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import styles from 'styles/Text.module.css';
import { CLIENT_ALERTS } from 'utils/constants';
import { authorPostsByIdQuery, categoryPostsByIdQuery } from 'utils/graphql-queries';
import useApolloQuery from 'hooks/useApolloQuery';

const PostList = dynamic(import('components/molecules/PostList'));

const LibraryDirectory = ({
  results,
  authors,
  popularCategories,
  childrenOfCurrentCategory,
  categoryName,
  description,
  seo,
  profileUrl,
  categoryId,
}) => {
  const router = useRouter();
  const mainArticle = results[0];
  const featuredArticles = results.slice(1, results.length);
  const isAuthor = router.asPath.includes('author');

  /** Handle Article Archive Query */
  const {
    handleNextPagination, handlePrevPagination, data, loading, error,
  } = useApolloQuery(
    isAuthor ? authorPostsByIdQuery : categoryPostsByIdQuery,
    {
      first: 6,
      last: null,
      after: null,
      before: null,
      id: categoryId,
    },
  );

  return (
    <>
      {Object.keys(seo).length > 0 ? (
        <BasicSiteHead
          title={seo.title}
          metaDescription={seo.metaDescription}
          canonical={seo.canonicalUrl}
        />
      ) : (
        <BasicSiteHead title={categoryName} metaDescription={description} />
      )}
      <SingleSubHeader span={7} offset={2} title={categoryName} subtitle={description} />
      <Container className="border mb-5">
        <Row>
          <BodyHeader />
          <Col sm={12} lg={9} className="mt-4">
            <MainArticle
              title={mainArticle.title}
              link={mainArticle.link}
              excerpt={mainArticle.excerpt || mainArticle.description}
              category={mainArticle.category}
              date={mainArticle.date}
              image={
                mainArticle.image ? mainArticle.image : '/images/no-image-found-diamond-750x350.png'
              }
              author={mainArticle.author}
            />
            <ul className="list-unstyled border-top pt-5 mt-5">
              <FeaturedArticle articles={featuredArticles} />
            </ul>
            <div className="border-top border-top pt-4">
              <h4 className="mb-5">
                <strong className="text-capitalize">All Articles</strong>
              </h4>
              <PostList
                content={{
                  handleNextPagination,
                  handlePrevPagination,
                  data,
                  loading,
                  error,
                }}
              />
            </div>
          </Col>
          <Col sm={12} lg={3} className="d-flex flex-column justify-content-start mt-3">
            {isAuthor && (
              <div className="my-3">
                <Link href={profileUrl}>
                  <a className={`${styles.redTitle} h6`}>
                    <strong>
                      <u>Visit Attorney&apos;s Profile</u>
                      {' '}
                      &raquo;
                    </strong>
                  </a>
                </Link>
              </div>
            )}
            {childrenOfCurrentCategory.length > 0 && (
              <PopularList
                term="Related Categories"
                list={childrenOfCurrentCategory}
                displayCount
              />
            )}
            <PopularList term="Popular Categories" list={popularCategories} displayCount />
            <PopularList term="Client Alerts" list={CLIENT_ALERTS} displayCount={false} />
            <FirmAuthors authors={authors} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LibraryDirectory;
