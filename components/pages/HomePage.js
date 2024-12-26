import dynamic from 'next/dynamic';
import HomeBanner from 'components/organisms/home/HomeBanner';
import HomeSiteHead from 'components/shared/head/HomeSiteHead';
import { CURRENT_DOMAIN } from 'utils/constants';
import HappyHolidayLink from 'components/molecules/home/HappyHolidayLink';
import { filterAttorneysByDesignation } from 'utils/helpers';
import { useMemo } from 'react';
import HomeContactForm from 'components/organisms/home/HomeContactForm';
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
  practices,
}) => {
  const { data: attorneysData } = useGetAttorneysQuery();

  const filteredAttorneysByDesignation = useMemo(
    () => filterAttorneysByDesignation(attorneysData?.data),
    [attorneysData?.data],
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
      <WhatWeDoSection practices={practices} />
      <WhyChooseUs content={whyChooseUs} />
      <LatestPostsSection tabsData={latestArticlesTabsData} />
      <Awards awards={awards} />
      <AllOfficeLocations offices={offices} />
    </>
  );
};

export default HomePage;
