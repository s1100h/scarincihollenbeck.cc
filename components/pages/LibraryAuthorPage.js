import dynamic from 'next/dynamic';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import SubHeaderCardsSlider from 'layouts/SubHeader/SubHeaderCardsSlider';

const SubscriptionBanner = dynamic(() => import('components/organisms/common/SubscriptionBanner'));

const LibraryAuthorPage = ({
  title, description, seo, subHeaderSlides,
}) => (
  <>
    <BasicSiteHead
      title={seo?.title}
      metaDescription={seo?.metaDesc}
      canonicalUrl={seo?.canonicalUrl}
    />
    <SubHeaderDefault
      title={title}
      subtitle={description}
      isSocials
      RightContentComponent={SubHeaderCardsSlider}
      rightContentProps={{
        slides: subHeaderSlides,
        slidesLabel: 'Library',
        isContact: false,
      }}
    />

    <SubscriptionBanner />
  </>
);

export default LibraryAuthorPage;
