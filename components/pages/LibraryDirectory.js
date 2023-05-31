import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Container, Row, Col } from 'react-bootstrap';
import SingleSubHeader from 'layouts/SingleSubHeader';
import BodyHeader from 'components/organisms/library/BodyHeader';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { authorPostsByIdQuery, categoryPostsByIdQuery } from 'utils/graphql-queries';
import useApolloQuery from 'hooks/useApolloQuery';
import {
  useContext, useEffect, useMemo, useState,
} from 'react';
import NewsCard from '../organisms/home/FirmNews/NewsCard';
import { AttorneysContext } from '../../contexts/AttorneysContext';
import LibrarySideBar from '../organisms/library/LibrarySideBar';
import Loader from '../atoms/Loader';
import { AllArticlesTitle } from '../../styles/LibraryArticles.style';
import FeaturedArticle from '../organisms/library/FeaturedArticle';

const PostList = dynamic(import('components/molecules/PostList'));

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

  const memoDataPosts = useMemo(() => news, [news]);
  const mainNews = memoDataPosts[0];
  const featuredArticles = news.slice(1, memoDataPosts.length);

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
      id: isAuthor ? categoryId.toString() : null,
      categoryIn: null,
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
          <Col sm={12} lg={9}>
            {memoDataPosts.length > 0 && (
              <Col sm={12} xl={8} className="m-auto">
                <NewsCard
                  postSlug={mainNews.link}
                  postImage={
                    mainNews.image ? mainNews.image : '/images/no-image-found-diamond-750x350.png'
                  }
                  postTitle={mainNews.title}
                  postDate={mainNews.date}
                  postAuthor={mainNews.author}
                  postExcerpt={mainNews.excerpt || mainNews.description}
                  isVertical="true"
                />
              </Col>
            )}
            <ul className="pt-5 mt-5 mb-5">
              {featuredArticles.length > 0 ? (
                <FeaturedArticle articles={featuredArticles} />
              ) : (
                noPostsFoundMessage
              )}
            </ul>
            <div className="pt-4 mb-5">
              <AllArticlesTitle>All Articles</AllArticlesTitle>
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
          <Col sm={12} lg={3} className="d-flex flex-column justify-content-start">
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
