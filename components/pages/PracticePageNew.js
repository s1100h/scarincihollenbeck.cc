import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { useMemo } from 'react';
import empty from 'is-empty';
import dynamic from 'next/dynamic';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import PracticeContent from 'components/organisms/practices/PracticeContent';
import AnchorTop from 'components/atoms/AnchorTop';

const PracticeAnchors = dynamic(() => import('components/organisms/practices/PracticeAnchors'));
const PracticeAttorneys = dynamic(() => import('components/organisms/practices/PracticeAttorneys'));
const WhyChooseUs = dynamic(() => import('components/organisms/practices/WhyChooseUs'));
const WhatWeDoSection = dynamic(() => import('components/organisms/home/WhatWeDoSection'));
const Awards = dynamic(() => import('components/organisms/home/Awards'));
const LatestPostsSection = dynamic(() => import('components/organisms/home/LatestPostsSection'));
// const GoogleReviews = dynamic(() => import('components/organisms/common/GoogleReviews'));

const anchorDataDefault = {
  faq: {
    id: 'faq-section',
    title: 'FAQs',
  },
  whyChooseUs: {
    id: 'why-choose-us-section',
    title: 'Why choose us',
  },
  attorneys: {
    id: 'attorneys-section',
    title: 'Attorneys',
  },
  whatWeDo: {
    id: 'What-we-do',
    title: 'What we do',
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
  whyChooseUsData,
  practices,
  googleReviews,
  awards,
  linkedPosts,
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
  }, [googleReviews, tabs, anchorDataDefault]);

  return (
    <>
      <BasicSiteHead
        title={practice?.seo?.title}
        metaDescription={practice?.seo?.metaDesc}
        canonicalUrl={canonicalUrl}
        personDataForSchema={attorneysSchemaData}
      />
      <SubHeaderDefault
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
      <Awards awards={awards} />

      <LatestPostsSection posts={linkedPosts} />
      <PracticeAttorneys
        attorneys={attorneyListPractice}
        chairs={chairPractice}
        anchorId={anchorData.attorneys.id}
      />
      <WhyChooseUs
        anchorId={anchorData.whyChooseUs.id}
        data={whyChooseUsData}
      />
      <WhatWeDoSection
        practices={practices}
        anchorId={anchorData.whatWeDo.id}
      />
      {/* {!empty(googleReviews) && (
        <GoogleReviews
          reviews={googleReviews}
          anchorId={anchorData?.googleReviews?.id}
        />
      )} */}
      <AnchorTop />
    </>
  );
};

export default PracticePageNew;
