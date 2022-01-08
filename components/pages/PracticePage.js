import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Container, Row, Col } from 'react-bootstrap';
import SingleSubHeader from 'layouts/SingleSubHeader';
import Menu from 'components/organisms/practice/Menu';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { categoryPostsByIdQuery } from 'utils/graphql-queries';
import PageSidebar from 'components/organisms/practice/PageSidebar';
import lineHeaderStyles from 'styles/LineHeader.module.css';
import useApolloQuery from 'hooks/useApolloQuery';

const BodyFooter = dynamic(() => import('components/organisms/practice/BodyFooter'));
const Body = dynamic(() => import('components/organisms/practice/Body'));
const RelatedArticles = dynamic(() => import('components/organisms/practice/RelatedArticles'));

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
          </Col>
          <Col sm={12} lg={3} style={{ position: 'relative', bottom: '24px' }}>
            <PageSidebar corePractices={corePractices} practiceChildren={practiceChildren} />
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <>
              <BodyFooter
                blogId={blogId}
                attorneyList={practice.attorneyList}
                highlightReal={practice.highlightReal}
                chair={practice.chair}
                handleLink={handleLink}
              />
              {data && (
                <div className="mt-5 mt-sm-4">
                  <div className={lineHeaderStyles.lineHeader}>
                    <h3>Related Articles</h3>
                  </div>
                  <RelatedArticles data={data} />
                </div>
              )}
            </>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PracticePage;
