import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Row, Col } from 'react-bootstrap';
import ProfileHeader from 'components/organisms/attorney/ProfileHeader';
import StringContent from 'components/organisms/attorney/StringContent';
import PersonSiteHead from 'components/shared/head/PersonSiteHead';
import ProfileSidebar from 'components/organisms/attorney/ProfileSidebar';
import { CURRENT_DOMAIN } from 'utils/constants';
import { ColForSidebar, ColStyled } from 'styles/attorney-page/AttorneyProfile.style';
import { CustomContainer } from 'styles/Containers.style';

const RecommendedPosts = dynamic(() => import('components/common/RecommendedPosts'));
const MainProfileMenu = dynamic(() => import('components/organisms/attorney/MainProfileMenu'));

const AttorneyPage = ({
  seo, profileHeader, attorneyFooterNewsArticles, tabs, attorneyAwards,
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeTabContent, setActiveTabContent] = useState({
    type: typeof tabs[0].content,
    title: tabs[0].title,
    content: tabs[0].content,
  });
  const [isArticle, setIsArticle] = useState(false);
  const [isBlog, setIsBlog] = useState(false);

  const compressPropsHederProfile = {
    ...profileHeader,
    setActiveTab,
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
  }, [activeTab]);

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
              <MainProfileMenu {...activeTabContent} setActiveTab={setActiveTabContent} />
            )}
          </ColStyled>
          <ColForSidebar top="45px" sm={12} md={11} lg={3} xl={4}>
            <ProfileSidebar
              services={profileHeader.practices}
              setActiveTab={setActiveTab}
              setActiveTabContent={setActiveTabContent}
              awards={attorneyAwards}
              {...activeTabContent}
            />
          </ColForSidebar>
          {attorneyFooterNewsArticles.length > 0 && (
            <Col sm={12} md={11} lg={12}>
              <RecommendedPosts
                titleGeneralBlock="News & Press Releases"
                attorneyFooterNewsArticles={attorneyFooterNewsArticles}
              />
            </Col>
          )}
        </Row>
      </CustomContainer>
    </>
  );
};

export default AttorneyPage;
