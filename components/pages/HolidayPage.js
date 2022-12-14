import SingleSubHeader from 'layouts/SingleSubHeader';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { createMarkup, formatPageImageToCloudinaryUrl } from 'utils/helpers';
import { Container } from 'react-bootstrap';
import { HolidayContent } from 'styles/HolidayPage.style';

const HolidayPage = ({
  seo, title, subTitle, canonicalUrl, bodyContent,
}) => (
  <>
    <BasicSiteHead
      title={seo.title}
      metaDescription={seo.metaDescription}
      canonicalUrl={canonicalUrl}
    />
    <SingleSubHeader title={title} subtitle={subTitle} isHoliday />
    <Container>
      <HolidayContent
        dangerouslySetInnerHTML={createMarkup(formatPageImageToCloudinaryUrl(bodyContent))}
      />
    </Container>
  </>
);

export default HolidayPage;
