import { createMarkup } from 'utils/helpers';
import pageContentStyles from 'styles/PageContent.module.css';
import dynamic from 'next/dynamic';

const PostList = dynamic(import('components/molecules/PostList'));

const Body = ({ activeTabContent, activeTab, content }) => (
  <>
    <div
      className={`${pageContentStyles.p} mt-4`}
      dangerouslySetInnerHTML={createMarkup(activeTabContent)}
    />
    {activeTab === 99 && <PostList content={content} />}
  </>
);

export default Body;
