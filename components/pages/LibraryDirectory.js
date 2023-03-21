import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Container, Row, Col } from 'react-bootstrap';
import SingleSubHeader from 'layouts/SingleSubHeader';
import BodyHeader from 'components/organisms/library/BodyHeader';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { authorPostsByIdQuery, categoryPostsByIdQuery } from 'utils/graphql-queries';
import useApolloQuery from 'hooks/useApolloQuery';
import { useContext, useEffect, useState } from 'react';
import NewsCard from '../organisms/home/FirmNews/NewsCard';
import { AttorneysContext } from '../../contexts/AttorneysContext';
import LibrarySideBar from '../organisms/library/LibrarySideBar';
import Loader from '../atoms/Loader';

const PostList = dynamic(import('components/molecules/PostList'));
const FeaturedArticle = dynamic(import('components/organisms/library/FeaturedArticle'));

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

  const [postsNews, setPostsNews] = useState({
    data: [],
    isLoading: true,
    noResults: false,
    mainNews: {},
  });
  useEffect(() => {
    if (news && news.length > 0) {
      setPostsNews((prevState) => {
        prevState.data = featuredArticles;
        prevState.isLoading = false;
        prevState.mainNews = mainNews;
        return prevState;
      });
    }
    if (news.length === 0) {
      setPostsNews((prevState) => {
        prevState.noResults = true;
        return prevState;
      });
    }
  }, [news]);

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
      <Container className="mb-5">
        <Row>
          <BodyHeader />
          <Col sm={12} lg={9} className="mt-4">
            {postsNews.isLoading ? (
              <Loader />
            ) : (
              <>
                {postsNews.mainNews?.title.length > 0 && (
                  <Col xl={10} className="m-auto">
                    <NewsCard
                      postSlug={postsNews.mainNews?.link}
                      postImage={
                        postsNews.mainNews.image
                          ? postsNews.mainNews.image
                          : '/images/no-image-found-diamond-750x350.png'
                      }
                      postTitle={postsNews.mainNews?.title}
                      postDate={postsNews.mainNews?.date}
                      postAuthor={postsNews.mainNews?.author}
                      postExcerpt={postsNews.mainNews?.excerpt || postsNews.mainNews?.description}
                      isVertical="true"
                    />
                  </Col>
                )}
              </>
            )}
            <ul className="pt-5 mt-5">
              {postsNews.isLoading ? (
                <Loader />
              ) : (
                <>
                  {postsNews.data ? (
                    <FeaturedArticle articles={postsNews.data} />
                  ) : (
                    noPostsFoundMessage
                  )}
                </>
              )}
            </ul>
            <div className="pt-4">
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
            <LibrarySideBar
              isAuthor={isAuthor}
              profileUrl={profileUrl}
              childrenOfCurrentCategory={childrenOfCurrentCategory}
              popularCategories={popularCategories}
              authors={authors}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LibraryDirectory;
