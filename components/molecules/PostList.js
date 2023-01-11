import React from 'react';
import Loader from 'components/atoms/Loader';
import { formatSrcToCloudinaryUrl } from 'utils/helpers';
import PaginationButtons from 'components/atoms/PaginationButtons';
import NewsCard from 'components/organisms/home/FirmNews/NewsCard';

const PostList = ({ content, isProfile }) => {
  const {
    handleNextPagination, handlePrevPagination, data, loading, error,
  } = content;

  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  if (data?.posts?.edges.length <= 0) {
    return <div>No posts found...</div>;
  }

  return (
    <div style={{ minHeight: '410px' }}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {data?.posts?.edges.map(({ node }) => (
            <div className="mb-4" key={node.title}>
              <NewsCard
                postSlug={node.uri.replace('https://wp/scarinichollenbeck.com', '')}
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
    </div>
  );
};

export default PostList;
