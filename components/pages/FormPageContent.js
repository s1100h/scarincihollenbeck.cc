import { Container, Row, Col } from 'react-bootstrap';
import SingleSubHeader from 'layouts/SingleSubHeader';
import SubscriptionMessage from 'components/molecules/subscription/subscription-message';
import CommonSidebarLinks from 'components/molecules/common-sidebar-links';
import ContactForm from 'components/shared/contact-form';
import SubscriptionFormColumn from 'components/molecules/subscription/subscription-form-column';
import OfficeList from 'components/organisms/form-page/OfficeList';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import sidebarStyles from 'styles/Sidebar.module.css';
import { createMarkup, formatPageImageToCloudinaryUrl } from 'utils/helpers';

const FormPageContent = ({
  isSubscribe, bodyContent, canonicalUrl, seo, site,
}) => (
  <>
    <BasicSiteHead
      title={seo.title}
      metaDescription={seo.metaDescription}
      canonicalUrl={canonicalUrl}
    />
    <SingleSubHeader title={site.title} subtitle={site.description} span={7} offset={0} />
    <Container>
      <Row>
        <Col sm={12} lg={9}>
          <span
            dangerouslySetInnerHTML={createMarkup(formatPageImageToCloudinaryUrl(bodyContent))}
          />
          <h4 className={`${grayTitleStyles.title} mb-5 w-100`}>{site.formLabel}</h4>
          {!isSubscribe && (
            <>
              <ContactForm />
              <OfficeList />
            </>
          )}
          {isSubscribe && <SubscriptionFormColumn />}
        </Col>
        <Col sm={12} lg={3} className={sidebarStyles.container}>
          {!isSubscribe && <SubscriptionMessage />}
          <CommonSidebarLinks />
        </Col>
      </Row>
    </Container>
  </>
);

export default FormPageContent;
