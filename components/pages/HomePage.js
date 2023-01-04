import dynamic from 'next/dynamic';
import HomeBanner from 'components/organisms/home/HomeBanner';
import HomeSiteHead from 'components/shared/head/HomeSiteHead';
import { CURRENT_DOMAIN } from 'utils/constants';
import { AboutContainer } from 'styles/AboutFirm.style';
import HappyHolidayLink from 'components/molecules/home/HappyHolidayLink';
import ModalWindow from '../atoms/ModalWindow';

const AllOfficeLocations = dynamic(() => import('components/organisms/home/AllOfficeLocations'), {
  ssr: true,
});
const AboutFirmSection = dynamic(() => import('components/organisms/home/AboutFirm'), {
  ssr: true,
});
const FirmNews = dynamic(() => import('components/organisms/home/FirmNews/FirmNews'), { ssr: true });
const Awards = dynamic(() => import('components/organisms/home/Awards'), { ssr: true });

const HomePage = ({
  seo,
  aboutFirm,
  aboutFirm2,
  awards,
  banner,
  isHoliday,
  offices,
  firmNewsArticles,
}) => (
  <>
    <HomeSiteHead title={seo.title} metaDescription={seo.metaDesc} canonicalUrl={CURRENT_DOMAIN} />
    <HomeBanner {...banner} />
    {isHoliday && <HappyHolidayLink />}
    <ModalWindow />
    <AboutContainer>
      <AboutFirmSection {...aboutFirm} />
      <AboutFirmSection {...aboutFirm2} />
    </AboutContainer>
    <AllOfficeLocations offices={offices} />
    <FirmNews firmNews={firmNewsArticles} />
    <Awards awards={awards} />
  </>
);

export default HomePage;
