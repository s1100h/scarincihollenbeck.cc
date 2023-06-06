import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Container, Row, Col } from 'react-bootstrap';
import SingleSubHeader from 'layouts/SingleSubHeader';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { categoryPostsByIdQuery } from 'utils/graphql-queries';
import useApolloQuery from 'hooks/useApolloQuery';
import { ColStyled } from 'styles/attorney-page/AttorneyProfile.style';
import { useRouter } from 'next/router';
import empty from 'is-empty';
import SideBarPracticeList from '../molecules/practice/SideBarPracticeList';
import Sidebar from '../organisms/post/PostSidebar';
import { SideBarContainer } from '../../styles/Sidebar.style';

const Body = dynamic(() => import('components/organisms/practice/Body'));
const AttorneysListBox = dynamic(() => import('components/common/AttorneysListBox'));

const PracticePage = ({
  corePractices,
  practice,
  practiceChildren,
  canonicalUrl,
  tabs,
  attorneysSchemaData,
  chairPractice,
  attorneyListPractice,
  keyContactsList,
}) => {
  const { query } = useRouter();
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeTabContent, setActiveTabContent] = useState(tabs[0].content);
  const [subtitlePractice, setSubtitlePractice] = useState();

  const blogId = practice.practicesIncluded.relatedBlogCategory.map(({ databaseId }) => databaseId);

  useEffect(() => {
    setSubtitlePractice(practice.description);
  }, [practice.description]);

  useEffect(() => {
    const currentTabContent = tabs.filter((tab) => tab.id === activeTab);
    setActiveTabContent(currentTabContent[0].content);
  }, [activeTab]);

  useEffect(() => {
    setActiveTab(tabs[0].id);
    setActiveTabContent(tabs[0].content);
  }, [query.slug]);

  const skipOrGo = activeTab !== 99;

  /** Handle Related Articles Query */
  const {
    handleNextPagination, handlePrevPagination, data, loading, error,
  } = useApolloQuery(
    categoryPostsByIdQuery,
    {
      first: 5,
      last: null,
      after: null,
      before: null,
      categoryIn: blogId,
    },
    skipOrGo,
  );

  return (
    <>
      <BasicSiteHead
        title={practice.seo.title}
        metaDescription={practice.seo.metaDescription}
        canonicalUrl={canonicalUrl}
        personDataForSchema={attorneysSchemaData}
      />
      <SingleSubHeader
        title={practice.title}
        subtitle={subtitlePractice}
        offset={0}
        span={8}
        tabs={tabs}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <Container>
        <Row>
          <ColStyled sm={12} lg={7} xl={8}>
            <Body
              activeTabContent={activeTabContent}
              content={{
                handleNextPagination,
                handlePrevPagination,
                data,
                loading,
                error,
              }}
              activeTab={activeTab}
            />
          </ColStyled>
          <Col className="mb-4" sm={12} md={8} lg={5} xl={4}>
            <SideBarContainer>
              <Sidebar
                keyContacts={keyContactsList}
                corePractices={corePractices}
                isPracticeVariant
              />
              {practiceChildren.length > 0 && (
                <SideBarPracticeList title="Related Practices" practicesList={practiceChildren} />
              )}
            </SideBarContainer>
          </Col>
        </Row>
        {(!empty(chairPractice) || !empty(attorneyListPractice)) && (
          <Row>
            <ColStyled sm={12}>
              <AttorneysListBox
                attorneys={{ chairs: chairPractice, attorneysList: attorneyListPractice }}
              />
            </ColStyled>
          </Row>
        )}
      </Container>
    </>
  );
};

export default PracticePage;
