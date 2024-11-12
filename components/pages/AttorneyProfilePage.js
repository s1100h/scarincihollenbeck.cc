import { useState } from 'react';
import ProfileAccordion from 'components/organisms/attorney/ProfileAccordion';
import ProfileHeader from 'components/organisms/attorney/ProfileHeader';
import PersonSiteHead from 'components/shared/head/PersonSiteHead';
import { CURRENT_DOMAIN } from 'utils/constants';
import AttorneyPrintPage from './AttorneyPrintPage';

const AttorneyProfilePage = ({
  seo,
  profileHeader,
  accordionData,
  qrCodeBioPage,
  qrCodeLinkedin,
}) => {
  const [isPrintMode, setIsPrintMode] = useState(false);

  const handlePrint = () => {
    setIsPrintMode(true);

    const afterPrint = () => {
      setIsPrintMode(false);
      if (typeof window !== 'undefined') {
        window.removeEventListener('afterprint', afterPrint);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('afterprint', afterPrint);
      setTimeout(() => {
        window.print();
      }, 0);
    }
  };

  const printPageProps = {
    ...profileHeader,
    ...accordionData,
    qrCodeBioPage,
    qrCodeLinkedin,
  };
  return (
    <>
      <PersonSiteHead
        title={seo.title}
        metaDescription={seo.metaDescription}
        canonicalUrl={`${CURRENT_DOMAIN}/${seo.canonicalLink}`}
        name={profileHeader.name}
        featuredImage={seo.image}
        designation={profileHeader.title}
        socialMediaLinks={seo.socialMediaLinks}
      />
      <ProfileHeader {...profileHeader} handlePrint={handlePrint} />
      <ProfileAccordion {...accordionData} name={profileHeader?.name} />

      {isPrintMode && <AttorneyPrintPage {...printPageProps} />}
    </>
  );
};

export default AttorneyProfilePage;
