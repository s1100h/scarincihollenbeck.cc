import { Container, Row, Col } from 'react-bootstrap';
import SingleSubHeader from 'layouts/SingleSubHeader';
import Subscription from 'components/molecules/subscription/Subscription';
import CommonSidebarLinks from 'components/molecules/CommonSidebarLinks';
import ContactForm from 'components/shared/ContactForm/ContactForm';
import SubscriptionFormColumn from 'components/molecules/subscription/SubscriptionFormColumn';
import OfficeList from 'components/organisms/form-page/OfficeList';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { formatPageImageToCloudinaryUrl } from 'utils/helpers';
import { BigGrayTitle } from 'styles/BigGrayTitle.style';
import { JSXWithDynamicLinks } from '../atoms/micro-templates/JSXWithDynamicLinks';

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
          <article className="mb-5">
            <JSXWithDynamicLinks HTML={formatPageImageToCloudinaryUrl(bodyContent)} />
          </article>
          <BigGrayTitle className="mb-4 w-100">{site.formLabel}</BigGrayTitle>
          {!isSubscribe && (
            <>
              <ContactForm />
              <OfficeList />
            </>
          )}
          {isSubscribe && <SubscriptionFormColumn />}
        </Col>
        <Col sm={12} lg={3}>
          {!isSubscribe && <Subscription />}
          <CommonSidebarLinks />
        </Col>
      </Row>
    </Container>
  </>
);

export default FormPageContent;
