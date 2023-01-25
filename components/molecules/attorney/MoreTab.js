import { useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { ButtonBox, ContentBox, MoreTabContainer } from 'styles/attorney-page/MoreTab.style';
import { ButtonTab } from 'styles/ButtonsMenu.style';
import useApolloQuery from 'hooks/useApolloQuery';
import { attorneyPostsQueryByIdAndSlug } from 'utils/graphql-queries';
import ArticleContent from 'components/organisms/attorney/ArticleContent';
import { createMarkup } from 'utils/helpers';
import ContentTitle from 'components/atoms/ContentTitle';
import { useRouter } from 'next/router';
import BlogList from './BlogList';
import Videos from './Videos';
import Table from './Table';
import { ArticleBody } from '../../../styles/Article.style';

const renderContent = (contentItem) => {
  const contentMap = {
    Media: <Table content={contentItem.content} />,
    Presentations: <Table content={contentItem.content} />,
    Publications: <Table content={contentItem.content} />,
    Videos: <Videos content={contentItem.content} />,
    Affiliations: <ArticleBody dangerouslySetInnerHTML={createMarkup(contentItem.content)} />,
    'Constitutional Law Reporter': (
      <>
        <ContentTitle title="Articles Published on Constitutional Law Reporter" />
        <BlogList content={contentItem.content} />
      </>
    ),
    'Government & Law': <BlogList content={contentItem.content} />,
    'Representative Matters': (
      <ArticleBody dangerouslySetInnerHTML={createMarkup(contentItem.content)} />
    ),
  };

  return contentMap[contentItem.title];
};

const cutTitles = (title) => {
  const TitlesMap = {
    'Representative Matters': 'Matters',
    'Constitutional Law Reporter': 'Law Reporter',
  };

  return TitlesMap[title] || title;
};

const MoreTab = ({ content }) => {
  const [activeSubTab, setActiveSubTab] = useState(content[0]);
  const { query } = useRouter();

  const categoryIdMap = {
    Blogs: 599,
    'News Press Releases': 98,
    Events: 99,
  };

  const {
    handleNextPagination, handlePrevPagination, data, loading, error,
  } = useApolloQuery(
    attorneyPostsQueryByIdAndSlug,
    {
      first: 3,
      last: null,
      after: '3',
      before: null,
      slug: query.slug,
      categoryId: categoryIdMap[activeSubTab.title],
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
              {cutTitles(tab.title)}
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
