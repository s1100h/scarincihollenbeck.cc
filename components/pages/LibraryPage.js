import RandomPostCard from 'components/molecules/common/RandomPostCard';
import LibraryCategory from 'components/organisms/library/LibraryCategory';
import LibraryFilters from 'components/organisms/library/LibraryFilters';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SubHeaderCardsSlider from 'layouts/SubHeader/SubHeaderCardsSlider';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedValues } from '../../redux/slices/library.slice';

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
}) => {
  const dispatch = useDispatch();
  const { selectedValues } = useSelector((state) => state.library);

  useEffect(() => {
    const copyFilters = { ...selectedValues };
    if (copyFilters.categories) {
      delete copyFilters.categories;
      dispatch(setSelectedValues(copyFilters));
    }
  }, []);

  return (
    <>
      <BasicSiteHead
        title={seo?.title}
        metaDescription={seo?.metaDesc}
        canonicalUrl={canonicalUrl}
      />
      <SubHeaderDefault
        title={title}
        subtitle={description}
        isSocials
        RightContentComponent={SubHeaderCardsSlider}
        rightContentProps={{
          slides: mainCategories,
          slidesLabel: 'Library',
          isContact: false,
        }}
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
};

export default LibraryPage;
