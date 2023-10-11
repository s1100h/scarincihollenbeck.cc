import SubHeader from 'layouts/SubHeader/SubHeader';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { Container } from 'react-bootstrap';
import dynamic from 'next/dynamic';

const HolidayContent = dynamic(
  () => import('components/molecules/holidays/HolidayContent'),
  {
    ssr: false,
  },
);

const HolidayPage = ({
  seo, title, subTitle, canonicalUrl, bodyContent,
}) => (
  <>
    <BasicSiteHead
      title={seo.title}
      metaDescription={seo.metaDescription}
      canonicalUrl={canonicalUrl}
    />
    <SubHeader title={title} subtitle={subTitle} isHoliday="true" />
    <Container>
      <HolidayContent content={bodyContent} />
    </Container>
  </>
);

export default HolidayPage;
