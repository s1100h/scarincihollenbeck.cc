import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from 'components/organisms/practice/Menu';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SingleSubHeader from 'layouts/single-sub-header';
import Body from 'components/organisms/practice/Body';
import { categoryPostsByIdQuery } from 'utils/graphql-queries';
import PageSidebar from 'components/organisms/practice/PageSidebar';
import useApolloQuery from 'hooks/useApolloQuery';

const BodyFooter = dynamic(() => import('components/organisms/practice/BodyFooter'));

const PracticePage = ({
  corePractices, practice, practiceChildren, canonicalUrl, tabs,
}) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeTabContent, setActiveTabContent] = useState(tabs[0].content);
  const [toggleDropDown, setToggleDropDown] = useState(false);
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

  function handleLink(e) {
    router.push(e.target.value);
  }

  return (
    <>
      <BasicSiteHead
        title={practice.seo.title}
        metaDescription={practice.seo.metaDescription}
        canonicalUrl={canonicalUrl}
      />
      <SingleSubHeader
        title={practice.title}
        subtitle={practice.description}
        offset={0}
        span={8}
        isTabs
      />
      <Container>
        <Row>
          <Col sm={12} lg={9} style={{ position: 'relative', top: '-66px' }}>
            <Menu
              tabs={tabs}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              setToggleDropDown={setToggleDropDown}
              toggleDropDown={toggleDropDown}
            />
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
            <BodyFooter
              blogId={blogId}
              attorneyList={practice.attorneyList}
              highlightReal={practice.highlightReal}
              chair={practice.chair}
              handleLink={handleLink}
            />
          </Col>
          <Col sm={12} lg={3} style={{ position: 'relative', bottom: '24px' }}>
            <PageSidebar corePractices={corePractices} practiceChildren={practiceChildren} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PracticePage;
