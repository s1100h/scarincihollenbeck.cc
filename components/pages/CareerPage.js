import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { SITE_TITLE } from 'utils/constants';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import CareerContent from 'components/organisms/career/CareerContent';
import SubHeaderBgImage from '../../public/images/contact-tiles-2.webp';

const CareerProfile = ({ career, canonicalUrl }) => {
  const { seo, careerFields, pagesFields } = career;
  const title = `${seo.title} | Career at ${SITE_TITLE}`;

  return (
    <>
      <BasicSiteHead
        title={title}
        metaDescription={seo.metaDescription}
        canonicalUrl={canonicalUrl}
      />
      <SubHeaderDefault
        title={career.title}
        subtitle={pagesFields?.description}
        backgroundImage={SubHeaderBgImage}
      />
      <CareerContent
        locations={careerFields?.locations}
        duration={careerFields?.duration}
        sections={pagesFields?.sections}
      />
    </>
  );
};

export default CareerProfile;
