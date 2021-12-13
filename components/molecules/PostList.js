import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
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
    return (
      <div
        className="d-flex flex-colum justify-content-center align-items-center"
        style={{ height: '300px' }}
      >
        <FadeLoader size={32} color="#a9a9a9" />
      </div>
    );
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
