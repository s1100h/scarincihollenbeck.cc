import ContentTitle from 'components/molecules/attorney/ContentTitle';
import PostList from 'components/molecules/PostList';

const ArticleContent = ({ title, content }) => (
  <>
    <ContentTitle title={title} />
    <PostList content={content} />
  </>
);

export default ArticleContent;
