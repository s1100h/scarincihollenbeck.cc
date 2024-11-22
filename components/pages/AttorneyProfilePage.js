import ProfileAccordion from 'components/organisms/attorney/ProfileAccordion';
import ProfileHeader from 'components/organisms/attorney/ProfileHeader';
import PersonSiteHead from 'components/shared/head/PersonSiteHead';
import { CURRENT_DOMAIN } from 'utils/constants';
import { useEffect, useState } from 'react';
import AttorneyPrintPage from './AttorneyPrintPage';

const AttorneyProfilePage = ({
  seo,
  profileHeader,
  accordionData,
  qrCodeBioPage,
  qrCodeLinkedin,
}) => {
  const printPageProps = {
    ...profileHeader,
    ...accordionData,
    qrCodeBioPage,
    qrCodeLinkedin,
  };
  const [isRenderPdf, setIsRenderPdf] = useState(false);
  const [isPrintReady, setIsPrintReady] = useState(false);

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      setIsRenderPdf(true);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        handlePrint();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (isRenderPdf && isPrintReady) {
      window.print();
      setIsRenderPdf(false);
      setIsPrintReady(false);
    }
  }, [isRenderPdf, isPrintReady]);

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
      <ProfileHeader handlePrint={handlePrint} {...profileHeader} />
      <ProfileAccordion {...accordionData} name={profileHeader?.name} />
      {isRenderPdf && (
        <AttorneyPrintPage
          {...printPageProps}
          onReady={() => setIsPrintReady(true)}
        />
      )}
    </>
  );
};

export default AttorneyProfilePage;
