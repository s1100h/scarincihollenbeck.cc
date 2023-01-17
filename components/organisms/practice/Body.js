import { createMarkup, formatPageImageToCloudinaryUrl } from 'utils/helpers';
import dynamic from 'next/dynamic';
import { ContentContainer } from 'styles/PageContant.style';

const PostList = dynamic(import('components/molecules/PostList'));

const Body = ({ activeTabContent, activeTab, content }) => (
  <>
    <ContentContainer
      dangerouslySetInnerHTML={createMarkup(formatPageImageToCloudinaryUrl(activeTabContent))}
    />
    {activeTab === 99 && <PostList content={content} />}
  </>
);

export default Body;
