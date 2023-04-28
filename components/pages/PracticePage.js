import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Container, Row, Col } from 'react-bootstrap';
import SingleSubHeader from 'layouts/SingleSubHeader';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { categoryPostsByIdQuery } from 'utils/graphql-queries';
import useApolloQuery from 'hooks/useApolloQuery';
import { ColStyled } from 'styles/attorney-page/AttorneyProfile.style';
import AttorneysListBox from 'components/common/AttorneysListBox';
import SideBarPracticeList from '../molecules/practice/SideBarPracticeList';
import { StickyWrapper } from '../../styles/Practices.style';

const Body = dynamic(() => import('components/organisms/practice/Body'));

const PracticePage = ({
  corePractices,
  practice,
  practiceChildren,
  canonicalUrl,
  tabs,
  attorneysSchemaData,
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeTabContent, setActiveTabContent] = useState(tabs[0].content);
  const blogId = practice.blog_data_id[0];
  /** Handle Related Articles Query */
  const {
    handleNextPagination, handlePrevPagination, data, loading, error,
  } = useApolloQuery(
    categoryPostsByIdQuery,
    {
      first: 8,
      last: null,
      after: null,
      before: null,
      id: blogId,
    },
  );

  useEffect(() => {
    const currentTabContent = tabs.filter((t) => t.id === activeTab);
    setActiveTabContent(currentTabContent[0].content);
  }, [activeTab]);

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
        subtitle={practice.description}
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
          <Col sm={12} md={8} lg={5} xl={4}>
            <StickyWrapper>
              {corePractices.length > 0 && (
                <SideBarPracticeList title="Core Practices" practicesList={corePractices} />
              )}
              {practiceChildren.length > 0 && (
                <SideBarPracticeList title="Related Practices" practicesList={practiceChildren} />
              )}
            </StickyWrapper>
          </Col>
        </Row>
        <Row>
          <ColStyled sm={12}>
            <AttorneysListBox
              attorneys={{ chairs: practice.chair, attorneysList: practice.attorneyList }}
            />
          </ColStyled>
        </Row>
      </Container>
    </>
  );
};

export default PracticePage;
