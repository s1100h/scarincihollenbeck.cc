import ContentTitle from 'components/atoms/ContentTitle';
import PostList from 'components/molecules/PostList';

const ArticleContent = ({ title, content }) => (
  <>
    {title?.length > 0 && <ContentTitle title={title} />}
    <PostList content={content} />
  </>
);

export default ArticleContent;
