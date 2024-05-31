import React, { useMemo } from 'react';
import { changePostLink, formatSrcToCloudinaryUrl } from 'utils/helpers';
import NewsCard from 'components/organisms/home/FirmNews/NewsCard';
import CustomPagination from 'components/atoms/CustomPagination';
import Loader from 'components/atoms/Loader';

const PostList = ({
  content, isProfile, postsClassName, queryParam,
}) => {
  const {
    loading, error, page, limit, posts,
  } = content;

  if (error) {
    return null;
  }

  const memoData = useMemo(() => posts?.edges, [content]);

  return (
    <>
      {loading && <Loader />}
      {!loading
        && memoData?.map(({ node }) => (
          <NewsCard
            key={node.title}
            postSlug={changePostLink(node.uri)}
            postImage={formatSrcToCloudinaryUrl(
              node.featuredImage?.node?.sourceUrl,
            )}
            postTitle={node.title}
            postDate={node.date}
            postExcerpt={isProfile ? null : node.excerpt}
            postAuthor={node.author}
            isProfile={isProfile}
            isVertical={isProfile}
            classNameProp={postsClassName}
          />
        ))}
      <CustomPagination
        totalItems={posts?.pageInfo?.offsetPagination?.total}
        currentPage={page}
        limit={limit}
        queryParam={queryParam}
      />
    </>
  );
};

export default PostList;
