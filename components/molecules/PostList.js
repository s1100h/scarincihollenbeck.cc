import React, { useEffect, useState } from 'react';
import Loader from 'components/atoms/Loader';
import { formatSrcToCloudinaryUrl } from 'utils/helpers';
import PaginationButtons from 'components/atoms/PaginationButtons';
import NewsCard from 'components/organisms/home/FirmNews/NewsCard';

const PostList = ({ content, isProfile }) => {
  const {
    handleNextPagination, handlePrevPagination, data, loading, error,
  } = content;
  const [posts, setPosts] = useState({
    data: [],
    isLoading: true,
    error: '',
    noResults: false,
  });

  useEffect(() => {
    if (error) {
      setPosts((prevState) => {
        prevState.error = JSON.stringify(error);
        return prevState;
      });
    }
    if (!loading) {
      setPosts((prevState) => {
        prevState.isLoading = loading;
        return prevState;
      });
      if (data?.posts?.edges.length > 0) {
        setPosts((prevState) => {
          prevState.data = data?.posts?.edges;
          return prevState;
        });
      }
      if (data?.posts?.edges.length === 0) {
        setPosts((prevState) => {
          prevState.noResults = true;
          return prevState;
        });
      }
    }
  }, [data, loading, error]);

  return (
    <>
      {posts.isLoading ? (
        <Loader />
      ) : (
        <>
          {!posts.isLoading
            && posts.data.map(({ node }) => (
              <div className="mb-4" key={node.title}>
                <NewsCard
                  postSlug={node.uri.replace('https://scarincihollenbeck.com/', '/')}
                  postImage={formatSrcToCloudinaryUrl(node.featuredImage?.node?.sourceUrl)}
                  postTitle={node.title}
                  postDate={node.date}
                  postExcerpt={isProfile ? null : node.excerpt}
                  postAuthor={node.author.node.name || 'Scarinci Hollenbeck'}
                  isProfile={isProfile}
                />
              </div>
            ))}
          <PaginationButtons
            handleNextPagination={handleNextPagination}
            handlePrevPagination={handlePrevPagination}
            countOfArticles={3}
          />
        </>
      )}
    </>
  );
};

export default PostList;
