import { Container, Row, Col } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import SubscriptionMessage from 'components/molecules/subscription/SubscriptionMessage';
import SidebarContent from 'components/shared/SidebarContent';
import SingleSubHeader from 'layouts/SingleSubHeader';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { formatPageImageToCloudinaryUrl } from 'utils/helpers';
import { FIRM_BLOG_PAGES } from 'utils/constants';
import lineHeaderStyles from 'styles/LineHeader.module.css';
import sidebarStyles from 'styles/Sidebar.module.css';
import Article from 'components/atoms/Article';

const PageArticleHero = dynamic(() => import('components/organisms/page/PageArticleHero'));
const RelatedAttorneys = dynamic(() => import('components/molecules/practice/RelatedAttorneys'));

export default function FirmPage({ page, canonicalUrl, handleLink }) {
  const {
    seo, tabs, relatedPages, attorneysMentioned, title, description, members,
  } = page;
  return (
    <>
      <BasicSiteHead title={seo.title} metaDescription={seo.metaDesc} canonicalUrl={canonicalUrl} />
      <SingleSubHeader title={title} subtitle={description} span={6} offset={0} />
      <Container>
        <Row>
          {tabs.map((tab) => (
            <Col key={tab.title} sm={12} lg={9}>
              <Article
                title={tab.title}
                highlight
                contentBody={formatPageImageToCloudinaryUrl(tab.content)}
              />
            </Col>
          ))}
          <Col sm={12} lg={3} className={sidebarStyles.container}>
            <SubscriptionMessage />
            <hr />
            <SidebarContent title="Firm Library" content={FIRM_BLOG_PAGES} tabKey={2} />
            <hr />
            <SidebarContent title="Diversity" content={relatedPages} tabKey={2} />
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="mt-lg-5">
            {members && (
              <RelatedAttorneys
                members={members.member}
                chair={members.chair}
                handleLink={handleLink}
                title="Chair"
              />
            )}
            {attorneysMentioned.length > 0 && (
              <div className="mt-lg-5">
                <div className={lineHeaderStyles.lineHeader}>
                  <h3>Recent from the firm</h3>
                </div>
                <div className="my-5">
                  <PageArticleHero
                    link={title.replace(/\s+/g, '-').toLowerCase()}
                    content={attorneysMentioned}
                  />
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
