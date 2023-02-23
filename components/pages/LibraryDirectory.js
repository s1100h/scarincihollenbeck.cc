import { useRouter } from 'next/router';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Container, Row, Col } from 'react-bootstrap';
import SingleSubHeader from 'layouts/SingleSubHeader';
import BodyHeader from 'components/organisms/library/BodyHeader';
import PopularList from 'components/organisms/library/PopularList';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { CLIENT_ALERTS } from 'utils/constants';
import { authorPostsByIdQuery, categoryPostsByIdQuery } from 'utils/graphql-queries';
import useApolloQuery from 'hooks/useApolloQuery';
import { useContext, useEffect } from 'react';
import NewsCard from '../organisms/home/FirmNews/NewsCard';
import { AttorneysContext } from '../../contexts/AttorneysContext';

const PostList = dynamic(import('components/molecules/PostList'));
const FeaturedArticle = dynamic(import('components/organisms/library/FeaturedArticle'));
const FirmAuthors = dynamic(import('components/organisms/library/FirmAuthors'));

const LibraryDirectory = ({
  news,
  popularCategories,
  childrenOfCurrentCategory,
  categoryName,
  description,
  seo,
  profileUrl,
  categoryId,
}) => {
  const { getAsyncAuthors, authors } = useContext(AttorneysContext);
  const router = useRouter();
  const mainNews = news[0];
  const featuredArticles = news.slice(1, news.length);
  const isAuthor = router.asPath.includes('author');

  useEffect(() => {
    if (authors.length === 0) {
      getAsyncAuthors();
    }
  }, [authors]);

  const noPostsFoundMessage = <p>Sorry, no posts found</p>;

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
      id: isAuthor ? categoryId.toString() : categoryId,
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
            {mainNews ? (
              <Col xl={10} className="m-auto">
                <NewsCard
                  postSlug={mainNews?.link}
                  postImage={
                    mainNews.image ? mainNews.image : '/images/no-image-found-diamond-750x350.png'
                  }
                  postTitle={mainNews?.title}
                  postDate={mainNews?.date}
                  postAuthor={mainNews?.author}
                  postExcerpt={mainNews?.excerpt || mainNews?.description}
                  isVertical="true"
                />
              </Col>
            ) : (
              noPostsFoundMessage
            )}
            <ul className="list-unstyled border-top pt-5 mt-5">
              {featuredArticles ? (
                <FeaturedArticle articles={featuredArticles} />
              ) : (
                noPostsFoundMessage
              )}
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
                <Link href={profileUrl} legacyBehavior>
                  <a className="redTitle h6">
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
