import ContentTitle from 'components/atoms/ContentTitle';
import PostList from 'components/molecules/PostList';

const ArticleContent = ({ title, content, isProfile }) => (
  <>
    {title?.length > 0 && <ContentTitle title={title} />}
    <PostList content={content} isProfile={isProfile} />
  </>
);

export default ArticleContent;
