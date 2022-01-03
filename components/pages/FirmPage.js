import { Container, Row, Col } from 'react-bootstrap';
import SubscriptionMessage from 'components/molecules/subscription/subscription-message';
import SidebarContent from 'components/shared/SidebarContent';
import PageArticleHero from 'components/organisms/page/page-article-hero';
import SingleSubHeader from 'layouts/single-sub-header';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { createMarkup } from 'utils/helpers';
import { FIRM_BLOG_PAGES } from 'utils/constants';
import lineHeaderStyles from 'styles/LineHeader.module.css';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import sidebarStyles from 'styles/Sidebar.module.css';

export default function FirmPage({ page, relatedPages, canonicalUrl }) {
  const { seo } = page;

  return (
    <>
      <BasicSiteHead title={seo.title} metaDescription={seo.metaDescription} />
      <SingleSubHeader title={page.title} subtitle={page.description} span={6} offset={0} />
      <Container>
        <Row>
          <Col sm={12} md={9}>
            {page.tabs.map((tab) => (
              <div key={tab.title}>
                <h4 className={`${grayTitleStyles.title} text-capitalize w-100`}>{tab.title}</h4>
                <div dangerouslySetInnerHTML={createMarkup(tab.content)} />
              </div>
            ))}
            {page.attorneysMentioned.length > 0 && (
              <>
                <div className={lineHeaderStyles.lineHeader}>
                  <h3>Recent from the firm</h3>
                </div>
                <div className="my-5">
                  <PageArticleHero
                    link={page.title.replace(/\s+/g, '-').toLowerCase()}
                    content={page.attorneysMentioned}
                  />
                </div>
              </>
            )}
          </Col>
          <Col sm={12} md={3} className={sidebarStyles.container}>
            <SubscriptionMessage />
            <hr />
            <SidebarContent title="Firm Library" content={FIRM_BLOG_PAGES} tabKey={2} />
            <hr />
            <SidebarContent title="Diversity" content={relatedPages} tabKey={2} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
