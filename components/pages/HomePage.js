import dynamic from 'next/dynamic';
import HomeBanner from 'components/organisms/home/HomeBanner';
import HomeSiteHead from 'components/shared/head/HomeSiteHead';
import { CURRENT_DOMAIN } from 'utils/constants';
import lineStyles from 'styles/LineHeader.module.css';
import { Suspense } from 'react';
import ModalWindow from '../atoms/ModalWindow';

const AllOfficeLocations = dynamic(() => import('components/organisms/home/AllOfficeLocations'), {
  ssr: true,
});
const AboutFirmSection = dynamic(() => import('components/organisms/home/AboutFirmSection'), {
  ssr: true,
});
const FirmNews = dynamic(() => import('components/organisms/home/FirmNews'), { ssr: true });
const Awards = dynamic(() => import('components/organisms/home/Awards'), { ssr: true });

const HomePage = ({
  seo, aboutFirm, aboutFirm2, awards, banner,
}) => (
  <>
    <HomeSiteHead title={seo.title} metaDescription={seo.metaDesc} canonicalUrl={CURRENT_DOMAIN} />
    <HomeBanner {...banner} />
    <ModalWindow />
    <div className={lineStyles.wrapper}>
      <AboutFirmSection {...aboutFirm} />
      <AboutFirmSection {...aboutFirm2} />
    </div>
    <Suspense fallback="Loading...">
      <AllOfficeLocations />
    </Suspense>
    <FirmNews />
    <Awards awards={awards} />
  </>
);

export default HomePage;
