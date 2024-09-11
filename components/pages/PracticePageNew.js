import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { useMemo } from 'react';
import empty from 'is-empty';
import dynamic from 'next/dynamic';
import DefaultSubHeaderNew from 'layouts/SubHeader/DefaultSubHeaderNew';
import PracticeContent from 'components/organisms/practices/PracticeContent';
import AnchorTop from 'components/atoms/AnchorTop';
import GoogleReviews from 'components/organisms/common/GoogleReviews';

const PracticeAnchors = dynamic(() => import('components/organisms/practices/PracticeAnchors'));
const PracticeAttorneys = dynamic(() => import('components/organisms/practices/PracticeAttorneys'));
const WhyChooseUs = dynamic(() => import('components/organisms/practices/WhyChooseUs'));

const anchorDataDefault = {
  faq: {
    id: 'faq-section',
    title: 'FAQs',
  },
  attorneys: {
    id: 'attorneys-section',
    title: 'Attorneys',
  },
  whyChooseUs: {
    id: 'why-choose-us-section',
    title: 'Why choose us',
  },
  googleReviews: {
    id: 'reviews-section',
    title: 'Reviews',
  },
};

const PracticePageNew = ({
  practice,
  canonicalUrl,
  attorneysSchemaData,
  keyContactsList,
  tabs,
  chairPractice,
  attorneyListPractice,
  faq,
  googleReviews,
}) => {
  const anchorData = useMemo(() => {
    let updatedAnchorData = {};

    if (!empty(tabs)) {
      tabs?.forEach(
        (tab) => (updatedAnchorData = {
          ...updatedAnchorData,
          [tab.id]: {
            id: `${tab.id}-section`,
            title: tab.title,
          },
        }),
      );
    }

    if (empty(googleReviews)) {
      delete anchorDataDefault.googleReviews;
    }

    return {
      ...anchorDataDefault,
      ...updatedAnchorData,
    };
  }, [googleReviews]);

  return (
    <>
      <BasicSiteHead
        title={practice?.seo?.title}
        metaDescription={practice?.seo?.metaDescription}
        canonicalUrl={canonicalUrl}
        personDataForSchema={attorneysSchemaData}
      />
      <DefaultSubHeaderNew
        title={practice?.title}
        subtitle={practice?.practicesIncluded.description}
        keyContacts={keyContactsList}
        backgroundImage={practice?.practicesIncluded?.practiceImage?.sourceUrl}
      />
      <PracticeAnchors anchorData={anchorData} title={practice?.title} />
      <PracticeContent
        data={tabs}
        title={practice?.title}
        anchorId={anchorData.overview?.id}
        anchorIdFaq={anchorData.faq.id}
        faqData={faq}
      />
      <PracticeAttorneys
        attorneys={attorneyListPractice}
        chairs={chairPractice}
        anchorId={anchorData.attorneys.id}
      />
      <WhyChooseUs anchorId={anchorData.whyChooseUs.id} />
      {!empty(googleReviews) && (
        <GoogleReviews
          reviews={googleReviews}
          anchorId={anchorData?.googleReviews?.id}
        />
      )}
      <AnchorTop />
    </>
  );
};

export default PracticePageNew;
