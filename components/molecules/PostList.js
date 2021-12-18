import React from 'react';
import Loader from 'components/atoms/Loader';
import { formatSrcToCloudinaryUrl } from 'utils/helpers';
import ArticlesNonVirtualized from 'components/shared/ArticlesNonVirtualized';
import PaginationButtons from 'components/atoms/PaginationButtons';

const PostList = ({ content }) => {
  const {
    handleNextPagination, handlePrevPagination, data, loading, error,
  } = content;

  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  // loading
  if (loading) {
    return <Loader loading={loading} />;
  }

  if (data?.posts?.edges.length <= 0) {
    return <div>No posts found...</div>;
  }

  return (
    <div style={{ minHeight: '410px' }}>
      <PaginationButtons
        handleNextPagination={handleNextPagination}
        handlePrevPagination={handlePrevPagination}
      />

      {data?.posts?.edges.map(({ node }) => (
        <div className="mb-4" key={node.title}>
          <ArticlesNonVirtualized
            excerpt={node.excerpt}
            date={node.date}
            imgSrc={formatSrcToCloudinaryUrl(node.featuredImage?.node?.sourceUrl)}
            title={node.title}
            slug={node.uri.replace('https://wp/scarinichollenbeck.com', '')}
          />
        </div>
      ))}

      <PaginationButtons
        handleNextPagination={handleNextPagination}
        handlePrevPagination={handlePrevPagination}
      />
    </div>
  );
};

export default PostList;
