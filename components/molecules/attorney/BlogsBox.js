import { changePostLink } from 'utils/helpers';
import { useMemo } from 'react';
import SimpleNewsCard from '../../common/SimpleNewsCard';
import CustomPagination from '../../atoms/CustomPagination';
import Loader from '../../atoms/Loader';
import {
  AccordionNewsList,
  BlogsWrapper,
} from '../../../styles/attorney-page/ProfileAccordion.style';

const sanitizePosts = (postsArg) => postsArg?.edges.map(({ node }) => {
  if (typeof node.author !== 'string') {
    node.author = node.author.node.name;
  }
  return {
    ...node,
  };
});
const BlogsBox = ({
  paginationData,
  queryParamsForPagination,
  isWideCards,
}) => {
  const {
    posts, limit, page, loading, error,
  } = paginationData;

  if (error) {
    return null;
  }

  const memoData = useMemo(() => sanitizePosts(posts), [paginationData]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <BlogsWrapper>
          <AccordionNewsList>
            {memoData.map((article) => (
              <SimpleNewsCard
                key={article?.title}
                link={{ url: changePostLink(article?.uri) }}
                textPost={article?.excerpt}
                title={article?.title}
                label={article?.author}
                date={article?.date}
                isJSXDescription
                isAuthor
                isWide={isWideCards}
              />
            ))}
          </AccordionNewsList>
          <CustomPagination
            totalItems={posts?.pageInfo?.offsetPagination?.total}
            currentPage={page}
            limit={limit}
            queryParam={queryParamsForPagination}
          />
        </BlogsWrapper>
      )}
    </>
  );
};

export default BlogsBox;
