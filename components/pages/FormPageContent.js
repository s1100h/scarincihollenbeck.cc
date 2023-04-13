import { Container, Row, Col } from 'react-bootstrap';
import SingleSubHeader from 'layouts/SingleSubHeader';
import Subscription from 'components/molecules/subscription/Subscription';
import CommonSidebarLinks from 'components/molecules/CommonSidebarLinks';
import ContactForm from 'components/shared/ContactForm/ContactForm';
import SubscriptionFormColumn from 'components/molecules/subscription/SubscriptionFormColumn';
import OfficeList from 'components/organisms/contact-us/OfficeList';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { formatPageImageToCloudinaryUrl } from 'utils/helpers';
import { BigGrayTitle } from 'styles/BigGrayTitle.style';
import { useContext } from 'react';
import { JSXWithDynamicLinks } from '../atoms/micro-templates/JSXWithDynamicLinks';
import { SidebarTile } from '../../styles/attorney-page/ProfileSidebar.style';
import Surface from '../atoms/micro-templates/surface';
import OfficesLinkTabs from '../molecules/location/OfficesLinkTabs';
import { LocationContext } from '../../contexts/LocationContext';

const FormPageContent = ({
  isSubscribe, bodyContent, canonicalUrl, seo, site, offices,
}) => (
  <>
    <BasicSiteHead
      title={seo.title}
      metaDescription={seo.metaDescription}
      canonicalUrl={canonicalUrl}
    />
    {/* <SingleSubHeader title={site.title} subtitle={site.description} /> */}
    <Container>
      <Row>
        <Col sm={12} lg={4}>
          <Surface>
            <SidebarTile indent="true" red="true">
              {site.formLabel}
            </SidebarTile>
            <ContactForm />
          </Surface>
        </Col>
        <Col sm={12} lg={8}>
          <OfficeList officesArr={offices} />
        </Col>
      </Row>
    </Container>
  </>
);

export default FormPageContent;
