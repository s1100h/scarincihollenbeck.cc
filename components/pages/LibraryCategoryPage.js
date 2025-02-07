import dynamic from 'next/dynamic';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import SubHeaderCardsSlider from 'layouts/SubHeader/SubHeaderCardsSlider';
import LibraryFilters from 'components/organisms/library/LibraryFilters';

const SubscriptionBanner = dynamic(() => import('components/organisms/common/SubscriptionBanner'));

const LibraryCategoryPage = ({
  title,
  description,
  seo,
  categoryId,
  filters,
  subHeaderSlides,
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

    <LibraryFilters
      practices={filters?.practices}
      offices={filters?.locations}
      authors={filters?.authors}
      industries={filters?.industries}
      years={filters?.years}
      categories={filters?.categories}
    />

    <SubscriptionBanner />
  </>
);
export default LibraryCategoryPage;
