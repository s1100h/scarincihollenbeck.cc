import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Row, Col } from 'react-bootstrap';
import ProfileHeader from 'components/organisms/attorney/ProfileHeader';
import StringContent from 'components/organisms/attorney/StringContent';
import PersonSiteHead from 'components/shared/head/PersonSiteHead';
import ProfileSidebar from 'components/organisms/attorney/ProfileSidebar';
import useApolloQuery from 'hooks/useApolloQuery';
import { CURRENT_DOMAIN } from 'utils/constants';
import { authorFirmNewsByIdQuery, authorPostsByIdQuery } from 'utils/graphql-queries';
import { ColForSidebar, ColStyled } from 'styles/attorney-page/AttorneyProfile.style';
import { CustomContainer } from 'styles/Containers.style';
import { useRouter } from 'next/router';
import Surface from 'components/atoms/micro-templates/surface';

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
}) => {
  const { query } = useRouter();
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
  const compressPropsHederProfile = {
    ...profileHeader,
    mainTabs,
    setActiveTab,
    moreTabs,
    activeTab,
    tabs,
  };

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
        setBlogId(query.slug);
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
      <CustomContainer>
        <Row className="d-flex justify-content-center">
          <ColStyled sm={12} md={11} lg={8} xl={8}>
            <ProfileHeader {...compressPropsHederProfile} />
            {activeTabContent.type === 'string' && !isBlog && !isArticle && (
              <StringContent {...activeTabContent} />
            )}
            {activeTabContent.type === 'object' && !isBlog && !isArticle && (
              <ObjectContent {...activeTabContent} />
            )}
            {isBlog && (
              <Surface>
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
              </Surface>
            )}
            {isArticle && (
              <Surface>
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
              </Surface>
            )}
          </ColStyled>
          <ColForSidebar top="45px" sm={12} md={11} lg={3} xl={4}>
            <ProfileSidebar
              services={profileHeader.practices}
              setActiveTab={setActiveTab}
              setActiveTabContent={setActiveTabContent}
              education={education}
              contact={contact}
              awards={attorneyAwards}
              {...activeTabContent}
            />
          </ColForSidebar>
          <Col sm={12} md={11} lg={12}>
            <ProfileFooter
              attorneyFooterBlogArticles={attorneyFooterBlogArticles}
              attorneyFooterNewsArticles={attorneyFooterNewsArticles}
            />
          </Col>
        </Row>
      </CustomContainer>
    </>
  );
};

export default AttorneyPage;
