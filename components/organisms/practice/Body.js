import { formatPageImageToCloudinaryUrl } from 'utils/helpers';
import dynamic from 'next/dynamic';
import { ContentContainer } from 'styles/PageContant.style';
import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';

const PostList = dynamic(import('components/molecules/PostList'));

const Body = ({ activeTabContent, activeTab, content }) => (
  <>
    <ContentContainer>
      <JSXWithDynamicLinks
        HTML={formatPageImageToCloudinaryUrl(activeTabContent)}
      />
    </ContentContainer>
    {activeTab === 99 && <PostList content={content} />}
  </>
);

export default Body;
