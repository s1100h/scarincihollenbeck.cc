import React, { useEffect, useMemo, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import {
  ButtonBox,
  ContentBox,
  MoreTabContainer,
} from 'styles/attorney-page/MoreTab.style';
import { ButtonTab } from 'styles/ButtonsMenu.style';
import { attorneyPostsQueryByIdAndSlug } from 'requests/graphql-queries';
import ArticleContent from 'components/organisms/attorney/ArticleContent';
import { useRouter } from 'next/router';
import { getPaginationData } from 'requests/getPaginationData';
import BlogList from './BlogList';
import Videos from './Videos';
import Table from './Table';
import { ArticleBody } from '../../../styles/Article.style';
import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';
import Images from '../../organisms/attorney/Images';
import DisclaimerText from '../../atoms/DisclaimerText';

const renderContent = (contentItem) => {
  const contentMap = {
    Media: <Table content={contentItem.content} />,
    Presentations: <Table content={contentItem.content} />,
    Publications: <Table content={contentItem.content} />,
    Video: <Videos content={contentItem.content} />,
    'Government & Law': <BlogList content={contentItem.content} />,
    Images: <Images images={contentItem.content} />,
  };

  return contentMap[contentItem.title];
};
const cutTitles = (title) => {
  const TitlesMap = {
    'Representative Matters': 'Matters',
    'Awards & Recognitions': 'Awards',
  };

  return TitlesMap[title] || title;
};

const MoreTab = ({ content }) => {
  const [activeSubTab, setActiveSubTab] = useState(content[0]);
  const { query, push, asPath } = useRouter();
  const isMattersInMore = activeSubTab.title === 'Representative Matters';
  const categoryIdMap = useMemo(
    () => ({
      Blogs: 599,
      'News Press Releases': 98,
      Events: 99,
    }),
    [],
  );

  useEffect(() => {
    push(asPath.split('?')[0], undefined, { shallow: true });
  }, [activeSubTab]);

  const params = {
    categoryId: categoryIdMap[activeSubTab.title],
    currentPage: query.page,
    itemsPerPage: 3,
    slug: query.slug,
  };

  const paginationData = getPaginationData(
    attorneyPostsQueryByIdAndSlug,
    params,
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
        {typeof activeSubTab.content === 'string' ? (
          <ArticleBody>
            <JSXWithDynamicLinks HTML={activeSubTab.content} />
            {isMattersInMore && (
              <DisclaimerText
                text="* Results may vary depending on your particular facts and legal
                circumstances."
              />
            )}
          </ArticleBody>
        ) : (
          renderContent(activeSubTab)
        )}
        {activeSubTab.content?.id && (
          <ArticleContent content={paginationData} isProfile />
        )}
      </ContentBox>
    </MoreTabContainer>
  );
};

export default MoreTab;
