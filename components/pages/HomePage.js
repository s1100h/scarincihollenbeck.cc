import dynamic from 'next/dynamic';
import HomeBanner from 'components/organisms/home/HomeBanner';
import HomeSiteHead from 'components/shared/head/HomeSiteHead';
import { CURRENT_DOMAIN } from 'utils/constants';
import HappyHolidayLink from 'components/molecules/home/HappyHolidayLink';
import { filterAttorneysByDesignation } from 'utils/helpers';
import { useGetAttorneysQuery } from '../../redux/services/project-api';
// import InfoModal from '../atoms/InfoModal';

// !! Attention the modal window was turned off. 12/31/2022
const AllOfficeLocations = dynamic(
  () => import('components/organisms/home/AllOfficeLocations'),
  { ssr: true },
);
const AboutFirmSection = dynamic(
  () => import('components/organisms/home/AboutFirm'),
  { ssr: true },
);
const HomeContactForm = dynamic(() => import('components/organisms/home/HomeContactForm'));
const IndustriesSection = dynamic(() => import('components/organisms/home/IndustriesSection'));
const RandomBioSection = dynamic(() => import('components/organisms/home/RandomBioSection'));
const WhatWeDoSection = dynamic(() => import('components/organisms/home/WhatWeDoSection'));
const LatestPostsSection = dynamic(() => import('components/organisms/home/LatestPostsSection'));
const Awards = dynamic(() => import('components/organisms/home/Awards'));
const WhyChooseUs = dynamic(() => import('components/organisms/home/WhyChooseUs'));

const HomePage = ({
  seo,
  awards,
  offices,
  isHoliday,
  firstSection,
  whoWeAre,
  industryWeWorkWith,
  latestArticlesTabsData,
  whyChooseUs,
}) => {
  const { data: attorneysData } = useGetAttorneysQuery();

  const filteredAttorneysByDesignation = filterAttorneysByDesignation(
    attorneysData?.data,
  );
  return (
    <>
      <HomeSiteHead
        title={seo?.title || ''}
        metaDescription={seo?.metaDesc || ''}
        canonicalUrl={CURRENT_DOMAIN}
      />
      <HomeBanner {...firstSection} />
      {isHoliday && <HappyHolidayLink />}
      {/* <InfoModal /> */}
      <AboutFirmSection {...whoWeAre} />
      <HomeContactForm />
      <IndustriesSection {...industryWeWorkWith} />
      <RandomBioSection attorneys={filteredAttorneysByDesignation} />
      <WhatWeDoSection />
      <WhyChooseUs content={whyChooseUs} />
      <LatestPostsSection tabsData={latestArticlesTabsData} />
      <Awards awards={awards} />
      <AllOfficeLocations offices={offices} />
    </>
  );
};

export default HomePage;
