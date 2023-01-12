import { useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { ButtonBox, ContentBox, MoreTabContainer } from 'styles/attorney-page/MoreTab.style';
import { ButtonTab } from 'styles/ButtonsMenu.style';
import AffiliationsContent from 'components/molecules/attorney/AffiliationsContent';
import useApolloQuery from 'hooks/useApolloQuery';
import { authorFirmNewsByIdQuery, authorPostsByIdQuery } from 'utils/graphql-queries';
import ArticleContent from 'components/organisms/attorney/ArticleContent';
import StringContent from 'components/organisms/attorney/StringContent';
import { createMarkup } from 'utils/helpers';
import ContentTitle from 'components/atoms/ContentTitle';
import BlogList from './BlogList';
import Videos from './Videos';
import Table from './Table';

const MoreTab = ({ content }) => {
  const [activeSubTab, setActiveSubTab] = useState(content[0]);

  const renderContent = (contentItem) => {
    const contentMap = {
      Media: <Table content={contentItem.content} />,
      Presentations: <Table content={contentItem.content} />,
      Publications: <Table content={contentItem.content} />,
      Videos: <Videos content={contentItem.content} />,
      Affiliations: <div dangerouslySetInnerHTML={createMarkup(contentItem.content)} />,
      'Constitutional Law Reporter': (
        <>
          <ContentTitle title="Articles Published on Constitutional Law Reporter" />
          <BlogList content={contentItem.content} />
        </>
      ),
      'Government & Law': <BlogList content={contentItem.content} />,
      'Representative Matters': <StringContent content={contentItem.content} />,
    };

    return contentMap[contentItem.title];
  };

  const {
    handleNextPagination, handlePrevPagination, data, loading, error,
  } = useApolloQuery(
    activeSubTab.title === 'Blogs' ? authorPostsByIdQuery : authorFirmNewsByIdQuery,
    {
      first: 3,
      last: null,
      after: null,
      before: null,
      name: activeSubTab?.content?.id,
    },
  );

  return (
    <MoreTabContainer>
      <ButtonBox>
        <ButtonGroup vertical>
          {content.map((tab) => (
            <ButtonTab
              key={tab.id}
              active={activeSubTab.id === tab.id ? 'true' : undefined}
              onClick={() => setActiveSubTab(tab)}
              isMore="true"
            >
              {tab.title === 'Constitutional Law Reporter' ? 'Law Reporter' : tab.title}
            </ButtonTab>
          ))}
        </ButtonGroup>
      </ButtonBox>
      <ContentBox>
        {renderContent(activeSubTab)}
        {activeSubTab.content?.id && (
          <ArticleContent
            content={{
              handleNextPagination,
              handlePrevPagination,
              data,
              loading,
              error,
              isProfile: 'true',
            }}
          />
        )}
      </ContentBox>
    </MoreTabContainer>
  );
};

export default MoreTab;
