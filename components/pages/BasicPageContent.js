import { Container, Row, Col } from 'react-bootstrap';
import PagesBody from 'components/organisms/page/BasicPageBody';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import ContactForm from 'components/shared/ContactForm/ContactForm';
import { formatPageImageToCloudinaryUrl } from 'utils/helpers';
import { BigGrayTitle } from 'styles/BigGrayTitle.style';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import { BASIC_PAGES } from 'utils/constants';
import { ContainerDefault } from 'styles/Containers.style';
import ContentRender from 'components/atoms/ContentRender';

const BasicPageContent = ({
  seo,
  site,
  canonicalUrl,
  bodyContent,
  pageForm,
  subHeaderImage,
}) => {
  // replace image url from post content
  const modPage = formatPageImageToCloudinaryUrl(bodyContent);

  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDesc}
        canonicalUrl={canonicalUrl}
      />
      <SubHeaderDefault
        title={site.title}
        subtitle={site.description}
        backgroundImage={subHeaderImage}
        menu={BASIC_PAGES}
      />

      <ContainerDefault>
        <ContentRender content={modPage} />
      </ContainerDefault>

      {/* <Container>
        <Row>
          <Col sm={12}>
            <PagesBody content={modPage} />
            {pageForm?.enableForm && (
              <>
                {pageForm.formLabel && (
                  <BigGrayTitle className="mb-5 w-75">
                    {pageForm.formLabel}
                  </BigGrayTitle>
                )}
                <ContactForm />
              </>
            )}
          </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default BasicPageContent;
