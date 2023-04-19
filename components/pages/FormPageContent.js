import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from 'components/shared/ContactForm/ContactForm';
import OfficeList from 'components/organisms/contact-us/OfficeList';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { SidebarTile } from '../../styles/attorney-page/ProfileSidebar.style';
import Surface from '../atoms/micro-templates/surface';
import TilePuzzle from '../organisms/contact-us/TilePuzzle';
import SingleSubHeader from '../../layouts/SingleSubHeader';

const FormPageContent = ({
  canonicalUrl, seo, site, offices,
}) => (
  <>
    <BasicSiteHead
      title={seo.title}
      metaDescription={seo.metaDescription}
      canonicalUrl={canonicalUrl}
    />
    <SingleSubHeader title={site.title} subtitle={site.description} />
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
      <TilePuzzle />
    </Container>
  </>
);

export default FormPageContent;
