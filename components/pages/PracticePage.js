import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from 'components/organisms/practice/Sidebar';
import Menu from 'components/organisms/practice/Menu';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SingleSubHeader from 'layouts/single-sub-header';
import BodyFooter from 'components/organisms/practice/BodyFooter';
import Body from 'components/organisms/practice/Body';

/** get graphql category query */
import { categoryPostsByIdQuery } from 'utils/graphql-queries';

const PracticePage = ({
  corePractices, practice, practiceChildren, canoncialUrl, tabs,
}) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeTabContent, setActiveTabContent] = useState(tabs[0].content);
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const blogId = practice.blog_data_id[0];

  const query = {
    query: categoryPostsByIdQuery,
    variables: {
      first: blogId,
      last: null,
      after: null,
      before: null,
    },
  };

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
        canoncialUrl={canoncialUrl}
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
            <Body activeTabContent={activeTabContent} query={query} activeTab={activeTab} />
            <BodyFooter
              blogId={blogId}
              attorneyList={practice.attorneyList}
              highlightReal={practice.highlightReal}
              blogId={blogId}
              chair={practice.chair}
              handleLink={handleLink}
            />
          </Col>
          <Col sm={12} lg={3} style={{ position: 'relative', bottom: '24px' }}>
            <Sidebar corePractices={corePractices} practiceChildren={practiceChildren} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PracticePage;
