import dynamic from 'next/dynamic';
import HomeBanner from 'components/organisms/home/HomeBanner';
import HomeSiteHead from 'components/shared/head/HomeSiteHead';
import { CURRENT_DOMAIN } from 'utils/constants';
import HappyHolidayLink from 'components/molecules/home/HappyHolidayLink';
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
const RandomBio = dynamic(() => import('components/organisms/home/RandomBio'));

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
}) => (
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
    <RandomBio />
    <AllOfficeLocations offices={offices} />
    <FirmNews firmNews={firmNewsArticles} />
    <Awards awards={awards} />
  </>
);

export default HomePage;
