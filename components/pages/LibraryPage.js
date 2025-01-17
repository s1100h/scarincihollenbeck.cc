import RandomPostCard from 'components/molecules/common/RandomPostCard';
import LibraryCategory from 'components/organisms/library/LibraryCategory';
import LibraryFilters from 'components/organisms/library/LibraryFilters';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import dynamic from 'next/dynamic';
import React from 'react';

const RandomCardsSlider = dynamic(() => import('components/organisms/common/RandomCardsSlider'));
const LibraryCategories = dynamic(() => import('components/organisms/library/LibraryCategories'));
const SubscriptionBanner = dynamic(() => import('components/organisms/common/SubscriptionBanner'));

const LibraryPage = ({
  seo,
  title,
  description,
  canonicalUrl,
  mainCategories,
  posts,
  filters,
}) => (
  <>
    <BasicSiteHead
      title={seo?.title}
      metaDescription={seo?.metaDesc}
      canonicalUrl={canonicalUrl}
    />
    <SubHeaderDefault
      title={title}
      subtitle={description}
      slides={mainCategories}
      slidesLabel="Library"
      isSocials
    />

    <LibraryFilters
      practices={filters?.practices}
      offices={filters?.locations}
      categories={mainCategories?.slice(0, -1)}
      authors={filters?.authors}
      industries={filters?.industries}
      years={filters?.years}
    />

    <LibraryCategory
      title={mainCategories[0]?.title}
      link={mainCategories[0]?.uri}
      posts={mainCategories[0]?.posts}
    />

    <RandomCardsSlider
      title="Stay Updated!"
      subtitle="Insights, Updates, and More — All in One Place."
      navigationLabel="next article"
      CardComponent={RandomPostCard}
      list={posts}
    />

    <LibraryCategories categories={mainCategories.slice(1, -1)} />

    <SubscriptionBanner />
  </>
);

export default LibraryPage;
