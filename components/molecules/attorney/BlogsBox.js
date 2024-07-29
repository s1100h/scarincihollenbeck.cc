import { Fragment } from 'react';
import SimpleNewsCard from '../../common/SimpleNewsCard';
import CustomPagination from '../../atoms/CustomPagination';
import Loader from '../../atoms/Loader';
import { AccordionNewsList } from '../../../styles/attorney-page/ProfileAccordion.style';

const sanitizePosts = (postsArg) => postsArg?.edges.map(({ node }) => {
  if (typeof node.author !== 'string') {
    node.author = node.author.node.name;
  }
  return {
    ...node,
  };
});
const BlogsBox = ({ paginationData, queryParamsForPagination }) => {
  const {
    posts, limit, page, loading,
  } = paginationData;
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <AccordionNewsList>
            {sanitizePosts(posts).map((article) => (
              <Fragment key={article.databaseId}>
                <SimpleNewsCard
                  link={article.uri}
                  title={article.title}
                  author={article.author}
                  date={article.date}
                />
              </Fragment>
            ))}
          </AccordionNewsList>
          <CustomPagination
            totalItems={posts?.pageInfo?.offsetPagination?.total}
            currentPage={page}
            limit={limit}
            queryParam={queryParamsForPagination}
          />
        </>
      )}
    </>
  );
};

export default BlogsBox;
