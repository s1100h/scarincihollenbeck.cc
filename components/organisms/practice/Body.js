import { createMarkup } from 'utils/helpers';
import pageContentStyles from 'styles/PageContent.module.css';
import ArticleFeed from 'components/shared/ArticleFeed';

const Body = ({ activeTabContent, activeTab, query }) => (
  <>
    <div
      className={`${pageContentStyles.p} mt-4`}
      dangerouslySetInnerHTML={createMarkup(activeTabContent)}
    />
    {activeTab === 99 && <ArticleFeed query={query} />}
  </>
);

export default Body;
