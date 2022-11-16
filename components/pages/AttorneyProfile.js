import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileHeader from 'components/organisms/attorney/ProfileHeader';
import StringContent from 'components/organisms/attorney/StringContent';
import PersonSiteHead from 'components/shared/head/PersonSiteHead';
import SidebarWrapper from 'components/organisms/attorney/SidebarWrapper';
import useApolloQuery from 'hooks/useApolloQuery';
import { CURRENT_DOMAIN } from 'utils/constants';
import { authorFirmNewsByIdQuery, authorPostsByIdQuery } from 'utils/graphql-queries';
import {
  ButtonTab,
  ButtonGroup,
  MobileGroup,
  NavItem,
  ButtonDropdown,
} from 'styles/ButtonsMenu.style';
import { ColStyled } from 'styles/AttorneyProfile.style';

const ProfileFooter = dynamic(() => import('components/organisms/attorney/ProfileFooter'));
const ObjectContent = dynamic(() => import('components/organisms/attorney/ObjectContent'));
const ArticleContent = dynamic(() => import('components/organisms/attorney/ArticleContent'));

const AttorneyPage = ({
  seo,
  profileHeader,
  attorneyFooterBlogArticles,
  attorneyFooterNewsArticles,
  mainTabs,
  moreTabs,
  attorneyCredentials,
  attorneyAwards,
  attorneyClients,
}) => {
  const [activeTab, setActiveTab] = useState(mainTabs[0].id);
  const [activeTabContent, setActiveTabContent] = useState({
    type: typeof mainTabs[0].content,
    title: mainTabs[0].title,
    content: mainTabs[0].content,
  });
  const [isArticle, setIsArticle] = useState(false);
  const [isBlog, setIsBlog] = useState(false);
  const [blogId, setBlogId] = useState(null);
  const [articleId, setArticleId] = useState(null);

  const education = {
    id: 22,
    title: 'Education',
    content: attorneyCredentials,
  };

  const contact = {
    id: 23,
    title: 'Contact',
    content: {
      emailForwarding: profileHeader.emailForwarding,
      name: profileHeader.name,
    },
  };

  const tabs = [...mainTabs, ...moreTabs, education, contact];

  /** Effect handler that manages how the tabs work */
  useEffect(() => {
    const currentTabContent = tabs.filter((t) => t.id === activeTab);
    if (
      currentTabContent[0].title !== 'Blogs'
      || currentTabContent[0].title !== 'News Press Releases'
    ) {
      setActiveTabContent({
        type: typeof currentTabContent[0].content,
        title: currentTabContent[0].title,
        content: currentTabContent[0].content,
      });
      setIsBlog(false);
      setIsArticle(false);
    }

    if (currentTabContent[0].title === 'Blogs') {
      setIsBlog(true);
      setIsArticle(false);
    }

    if (currentTabContent[0].title === 'News Press Releases') {
      setIsArticle(true);
      setIsBlog(false);
    }
  }, [activeTab]);

  /** Another hook that manages how the tabs work but focuses on the blog tab or the news tab */
  useEffect(() => {
    tabs.forEach((tab) => {
      if (Object.values(tab).includes('Blogs')) {
        setBlogId(tab.content.id);
      }

      if (Object.values(tab).includes('News Press Releases')) {
        setArticleId(tab.content.id);
      }
    });
  }, [tabs]);

  /** Handle Blog Posts & News Press Releases Hooks */
  const {
    handleNextPagination: handleBlogNext,
    handlePrevPagination: handleBlogPrev,
    data: blogs,
    loading: blogLoading,
    error: blogError,
  } = useApolloQuery(authorPostsByIdQuery, {
    first: 3,
    last: null,
    after: null,
    before: null,
    id: blogId,
  });

  const {
    handleNextPagination: handleNewsNext,
    handlePrevPagination: handleNewsPrev,
    data: news,
    loading: newsLoading,
    error: newsError,
  } = useApolloQuery(authorFirmNewsByIdQuery, {
    first: 3,
    last: null,
    after: null,
    before: null,
    name: articleId,
  });

  return (
    <>
      <PersonSiteHead
        title={seo.title}
        metaDescription={seo.metaDescription}
        canonicalUrl={`${CURRENT_DOMAIN}/${seo.canonicalLink}`}
        name={profileHeader.name}
        featuredImage={seo.image}
        designation={profileHeader.title}
        socialMediaLinks={seo.socialMediaLinks}
      />
      <ProfileHeader {...profileHeader} />
      <Container>
        <Row>
          <ColStyled sm={12} lg={9} top="-116px">
            <ButtonGroup>
              {mainTabs.map((tab) => (
                <ButtonTab
                  key={tab.id}
                  active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title === 'News Press Releases' ? 'News & Press Releases' : tab.title}
                </ButtonTab>
              ))}
              {moreTabs.length > 0 && (
                <div style={{ width: '200px' }}>
                  <ButtonDropdown title="More">
                    {moreTabs.map((tab) => (
                      <NavItem
                        key={tab.id}
                        id={tab.id}
                        active={activeTab === tab.id}
                        onClick={() => {
                          setActiveTab(tab.id);
                        }}
                      >
                        {tab.title}
                      </NavItem>
                    ))}
                  </ButtonDropdown>
                </div>
              )}
            </ButtonGroup>
            <MobileGroup>
              <ButtonDropdown title="Menu">
                {tabs.map((tab) => (
                  <NavItem
                    key={tab.id}
                    active={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.title}
                  </NavItem>
                ))}
              </ButtonDropdown>
            </MobileGroup>
          </ColStyled>
          <ColStyled sm={12} lg={9} top="-36px">
            {activeTabContent.type === 'string' && !isBlog && !isArticle && (
              <StringContent {...activeTabContent} />
            )}
            {activeTabContent.type === 'object' && !isBlog && !isArticle && (
              <ObjectContent {...activeTabContent} />
            )}
            {isBlog && (
              <ArticleContent
                title="Blogs"
                content={{
                  handleNextPagination: handleBlogNext,
                  handlePrevPagination: handleBlogPrev,
                  data: blogs,
                  loading: blogLoading,
                  error: blogError,
                }}
              />
            )}
            {isArticle && (
              <ArticleContent
                title="News & Press Releases"
                content={{
                  handleNextPagination: handleNewsNext,
                  handlePrevPagination: handleNewsPrev,
                  data: news,
                  loading: newsLoading,
                  error: newsError,
                }}
              />
            )}
          </ColStyled>
          <Col sm={12} lg={3}>
            <SidebarWrapper
              services={profileHeader.practices}
              setActiveTab={setActiveTab}
              setActiveTabContent={setActiveTabContent}
              education={education}
              contact={contact}
              awards={attorneyAwards}
            />
          </Col>
          <Col sm={12}>
            <ProfileFooter
              attorneyFooterBlogArticles={attorneyFooterBlogArticles}
              attorneyFooterNewsArticles={attorneyFooterNewsArticles}
              clients={attorneyClients}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AttorneyPage;
