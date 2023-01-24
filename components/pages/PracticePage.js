import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Container, Row, Col } from 'react-bootstrap';
import SingleSubHeader from 'layouts/SingleSubHeader';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { categoryPostsByIdQuery } from 'utils/graphql-queries';
import useApolloQuery from 'hooks/useApolloQuery';
import { ColStyled } from 'styles/attorney-page/AttorneyProfile.style';
import AttorneysListBox from 'components/common/AttorneysListBox';

const Body = dynamic(() => import('components/organisms/practice/Body'));
const ListWrapperDynamic = dynamic(() => import('components/organisms/practices/ListWrapper'));

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
          <ColStyled sm={10} md={8} lg={5} xl={4}>
            <AttorneysListBox
              attorneys={{ chair: practice.chair, attorneysList: practice.attorneyList }}
            />
          </ColStyled>
        </Row>
        <Row>
          <Col sm={12}>
            <ListWrapperDynamic title="Core Practices" list={corePractices} isSimple />
          </Col>
          <Col sm={12}>
            <ListWrapperDynamic title="Related Practices" list={practiceChildren} isSimple />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PracticePage;
