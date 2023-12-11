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

const HomePage = ({
  seo,
  aboutFirm,
  aboutFirm2,
  awards,
  banner,
  isHoliday,
  offices,
  firmNewsArticles,
}) => {
  const aboutFirmProps = {
    infos: [
      {
        description: aboutFirm.description,
        title: aboutFirm.title,
        subTitle: aboutFirm.subTitle,
      },
      {
        description: aboutFirm2.description,
        title: aboutFirm2.title,
        subTitle: aboutFirm2.subTitle,
      },
    ],
    linksBtn: [
      {
        linkLabel: aboutFirm.linkLabel,
        linkUrl: aboutFirm.linkUrl,
      },
      {
        linkLabel: aboutFirm2.linkLabel,
        linkUrl: aboutFirm2.linkUrl,
      },
    ],
  };

  return (
    <>
      <HomeSiteHead
        title={seo.title}
        metaDescription={seo.metaDesc}
        canonicalUrl={CURRENT_DOMAIN}
      />
      <HomeBanner {...banner} />
      {isHoliday && <HappyHolidayLink />}
      {/* <InfoModal /> */}
      <AboutFirmSection {...aboutFirmProps} />
      <AllOfficeLocations offices={offices} />
      <FirmNews firmNews={firmNewsArticles} />
      <Awards awards={awards} />
    </>
  );
};

export default HomePage;
