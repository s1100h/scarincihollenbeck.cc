import dynamic from 'next/dynamic';
import HomeBanner from 'components/organisms/home/HomeBanner';
import HomeSiteHead from 'components/shared/head/HomeSiteHead';
import { CURRENT_DOMAIN } from 'utils/constants';
import HappyHolidayLink from 'components/molecules/home/HappyHolidayLink';
import { useContext } from 'react';
import { AttorneysContext } from 'contexts/AttorneysContext';
import { filterAttorneysByDesignation } from 'utils/helpers';
// import InfoModal from '../atoms/InfoModal';

// !! Attention the modal window was turned off. 12/31/2022
const AllOfficeLocations = dynamic(
  () => import('components/organisms/home/AllOfficeLocations'),
  {
    ssr: true,
  },
);
const AboutFirmSection = dynamic(
  () => import('components/organisms/home/AboutFirm'),
  {
    ssr: true,
  },
);
const FirmNews = dynamic(
  () => import('components/organisms/home/FirmNews/FirmNews'),
  { ssr: true },
);
const Awards = dynamic(() => import('components/organisms/home/Awards'), {
  ssr: true,
});

const HomeContactForm = dynamic(() => import('components/organisms/home/HomeContactForm'));
const IndustriesSection = dynamic(() => import('components/organisms/home/IndustriesSection'));
const RandomBioSection = dynamic(() => import('components/organisms/home/RandomBioSection'));
const WhatWeDoSection = dynamic(() => import('components/organisms/home/WhatWeDoSection'));
const WhyChooseUs = dynamic(() => import('components/organisms/home/WhyChooseUs'));

const HomePage = ({
  seo,
  awards,
  firmNewsArticles,
  offices,
  isHoliday,
  firstSection,
  whoWeAre,
  industryWeWorkWith,
  whatWeDo,
  whyChooseUs,
}) => {
  const { attorneysContext } = useContext(AttorneysContext);
  const filteredAttorneysByDesignation = filterAttorneysByDesignation(attorneysContext);

  return (
    <>
      <HomeSiteHead
        title={seo.title}
        metaDescription={seo.metaDesc}
        canonicalUrl={CURRENT_DOMAIN}
      />
      <HomeBanner {...firstSection} />
      {isHoliday && <HappyHolidayLink />}
      {/* <InfoModal /> */}
      <AboutFirmSection {...whoWeAre} />
      <HomeContactForm />
      <IndustriesSection {...industryWeWorkWith} />
      <RandomBioSection attorneys={filteredAttorneysByDesignation} />
      <WhatWeDoSection {...whatWeDo} />
      <WhyChooseUs content={whyChooseUs} />
      <AllOfficeLocations offices={offices} />
      <FirmNews firmNews={firmNewsArticles} />
      <Awards awards={awards} />
    </>
  );
};

export default HomePage;
