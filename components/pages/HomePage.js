import dynamic from 'next/dynamic';
import HomeBanner from 'components/organisms/home/HomeBanner';
import HomeSiteHead from 'components/shared/head/HomeSiteHead';
import { CURRENT_DOMAIN } from 'utils/constants';
import lineStyles from 'styles/LineHeader.module.css';
import React, { Suspense } from 'react';
import ModalWindow from '../atoms/ModalWindow';

const AllOfficeLocations = React.lazy(() => import('components/organisms/home/AllOfficeLocations'));
const AboutFirmSection = dynamic(() => import('components/organisms/home/AboutFirmSection'));
const FirmNews = React.lazy(() => import('components/organisms/home/FirmNews'));
const Awards = React.lazy(() => import('components/organisms/home/Awards'));

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
    <Suspense fallback={<div>Loading...</div>}>
      <AllOfficeLocations />
      <FirmNews />
      <Awards awards={awards} />
    </Suspense>
  </>
);

export default HomePage;
