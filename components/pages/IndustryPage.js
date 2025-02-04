import React, { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SubHeaderIndustry from 'layouts/SubHeader/SubHeaderIndustry';
import { Title60 } from 'styles/common/Typography.style';
import { IndustryPageWrapper } from 'styles/Industries.style';
import empty from 'is-empty';

const FilledSection = dynamic(() => import('components/organisms/industries/FilledSection'));
const VerticalTabs = dynamic(() => import('components/organisms/locations/VerticalTabs'));
const LogoSeparator = dynamic(() => import('components/common/LogoSeparator'));
const IndustryAttorneys = dynamic(() => import('components/organisms/industries/IndustryAttorneys'));
const IndustryFaq = dynamic(() => import('components/organisms/industries/IndustryFaq'));
const IndustryWhyChooseUs = dynamic(() => import('components/organisms/industries/IndustryWhyChooseUs'));
const SubscriptionBanner = dynamic(() => import('components/organisms/common/SubscriptionBanner'));

const anchorDataDefault = {
  filledSection: {
    id: 'filled-section',
  },
  verticalTabs: {
    id: 'tabs-section',
    title: 'Areas of Service',
  },
  attorneys: {
    id: 'attorneys-section',
    title: 'Attorneys',
  },
  faq: {
    id: 'faq-section',
    title: 'FAQs',
  },
  whyChooseUs: {
    id: 'why-choose-us-section',
    title: 'Why choose us',
  },
  articles: {
    id: 'articles-section',
    title: 'Related Articles',
  },
};

const IndustryPage = ({ content, seo, canonicalLink }) => {
  const [activeTab, setActiveTab] = useState(0);
  const {
    title,
    description,
    featuredImage,
    contentSection,
    contentTabs,
    faq,
    whyChooseUs,
    chairIndustry,
    attorneyListIndustry,
    relatedPosts,
    slides,
  } = content;

  const concatenatedAttorneys = [...chairIndustry, ...attorneyListIndustry];

  const anchorLinks = useMemo(() => {
    const copyAnchorData = { ...anchorDataDefault };

    if (empty(contentSection?.description)) {
      delete copyAnchorData.filledSection;
    } else {
      copyAnchorData.filledSection.title = contentSection?.title;
    }

    if (empty(contentTabs)) {
      delete copyAnchorData.verticalTabs;
    }

    if (empty(concatenatedAttorneys)) {
      delete copyAnchorData.attorneys;
    }

    if (empty(relatedPosts)) {
      delete copyAnchorData.articles;
    }

    return {
      ...copyAnchorData,
    };
  }, [
    contentSection,
    contentTabs,
    concatenatedAttorneys,
    relatedPosts,
    anchorDataDefault,
  ]);

  return (
    <>
      <BasicSiteHead
        title={seo?.title}
        metaDescription={seo?.metaDesc}
        canonicalUrl={canonicalLink}
      />
      <SubHeaderIndustry
        title={title}
        description={description}
        attorneys={concatenatedAttorneys?.slice(0, 6)}
        slides={slides}
        backgroundImage={featuredImage}
        anchors={Object.values(anchorLinks)}
        attorneysAnchorId={anchorLinks?.attorneys?.id}
        setActiveTab={setActiveTab}
      />
      <IndustryPageWrapper>
        <FilledSection
          title={contentSection?.title}
          content={contentSection?.description}
          anchorId={anchorLinks?.filledSection?.id}
        />
        <VerticalTabs
          title={anchorLinks?.verticalTabs?.title}
          contentTabs={contentTabs}
          anchorId={anchorLinks?.verticalTabs?.id}
          headerOffset={100}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {!empty(concatenatedAttorneys) && (
          <>
            <LogoSeparator direction="row" isBig isContainer />

            <IndustryAttorneys
              title={anchorLinks?.attorneys?.title}
              attorneys={concatenatedAttorneys}
              anchorId={anchorLinks?.attorneys?.id}
            />
          </>
        )}

        <IndustryFaq faqList={faq} anchorId={anchorLinks?.faq?.id} />

        <IndustryWhyChooseUs
          data={whyChooseUs}
          anchorId={anchorLinks?.whyChooseUs?.id}
        />

        <SubscriptionBanner isIndustry TitleComponent={Title60} />
      </IndustryPageWrapper>
    </>
  );
};

export default IndustryPage;
