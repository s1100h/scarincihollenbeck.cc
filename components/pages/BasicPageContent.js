import { Container, Row, Col } from 'react-bootstrap';
import PagesBody from 'components/organisms/page/BasicPageBody';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import ContactForm from 'components/shared/ContactForm/ContactForm';
import SingleSubHeader from 'layouts/SingleSubHeader';
import { formatPageImageToCloudinaryUrl } from 'utils/helpers';
import { BigGrayTitle } from 'styles/BigGrayTitle.style';

const BasicPageContent = ({
  seo, site, canonicalUrl, bodyContent, pageForm,
}) => {
  // replace image url from post content
  const modPage = formatPageImageToCloudinaryUrl(bodyContent);

  return (
    <>
      <BasicSiteHead title={seo.title} metaDescription={seo.metaDesc} canonicalUrl={canonicalUrl} />
      <SingleSubHeader title={site.title} subtitle={site.description} span={7} offset={2} />
      <Container>
        <Row>
          <Col sm={12}>
            <PagesBody content={modPage} />
            {pageForm?.enableForm && (
              <>
                {pageForm.formLabel && <BigGrayTitle className="mb-5 w-75">{pageForm.formLabel}</BigGrayTitle>}
                <ContactForm />
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BasicPageContent;
