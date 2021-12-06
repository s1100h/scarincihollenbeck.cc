import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from 'components/shared/contact-form';
import { createMarkup } from 'utils/helpers';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import pageContentStyles from 'styles/PageContent.module.css';
import ArticleArchives from 'components/organisms/library/article-archives';
import SubscriptionMessage from 'components/molecules/subscription/subscription-message';
import CommonSidebarLinks from 'components/molecules/common-sidebar-links';
import PopularList from 'components/organisms/library/popular-list';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SingleSubHeader from 'layouts/single-sub-header';
import { CLIENT_ALERTS, CURRENT_DOMAIN } from 'utils/constants';

const sidebar = (
  <>
    <SubscriptionMessage />
    <CommonSidebarLinks />
    <hr />
    <PopularList term="Client Alerts" list={CLIENT_ALERTS} displayCount={false} />
  </>
);

export default function CovidPage({
  title, seo, bodyContent, canonicalUrl, subTitle, archiveUrl,
}) {
  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDescription}
        canonicalUrl={canonicalUrl}
      />
      <SingleSubHeader title={title} subtitle={subTitle} span={8} offset={0} />
      <Container>
        <Row>
          <Col sm={12} md={9}>
            <div
              className={pageContentStyles.p}
              dangerouslySetInnerHTML={createMarkup(bodyContent)}
            />
            <div className="border-top border-top pt-4">
              <ArticleArchives url={archiveUrl} title="COVID-19 Articles" />
            </div>
            <h4 className={grayTitleStyles.title}>Contact A Firm Reprepresentative</h4>
            <ContactForm />
          </Col>
          <Col sm={12} md={3}>
            {sidebar}
          </Col>
        </Row>
      </Container>
    </>
  );
}
