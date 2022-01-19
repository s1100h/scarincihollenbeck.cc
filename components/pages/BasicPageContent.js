import { Container, Row, Col } from 'react-bootstrap';
import PagesBody from 'components/organisms/page/Body';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import ContactForm from 'components/shared/ContactForm';
import SingleSubHeader from 'layouts/SingleSubHeader';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import { formatPageImageToCloudinaryUrl } from 'utils/helpers';

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
                {pageForm.formLabel && (
                  <h4 className={`${grayTitleStyles.title} mb-5 w-75`}>{pageForm.formLabel}</h4>
                )}
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
