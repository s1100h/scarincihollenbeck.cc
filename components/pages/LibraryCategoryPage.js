import dynamic from 'next/dynamic';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import SubHeaderCardsSlider from 'layouts/SubHeader/SubHeaderCardsSlider';
import LibraryFilters from 'components/organisms/library/LibraryFilters';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setSelectedValues } from '../../redux/slices/library.slice';

const SubscriptionBanner = dynamic(() => import('components/organisms/common/SubscriptionBanner'));

const LibraryCategoryPage = ({
  title,
  description,
  seo,
  categoryId,
  categories,
  filters,
}) => {
  const dispatch = useDispatch();
  const { selectedValues } = useSelector((state) => state.library);

  useEffect(() => {
    const isCategoryExists = categories?.find(
      (item) => item?.databaseId === categoryId,
    );
    if (!isCategoryExists) return;
    const newSelectedValues = {
      ...selectedValues,
      categories: { value: title, id: categoryId },
    };
    dispatch(setSelectedValues(newSelectedValues));
  }, [categoryId]);

  return (
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
          slides: categories,
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
        categories={categories?.slice(0, -1)}
      />

      <SubscriptionBanner />
    </>
  );
};

export default LibraryCategoryPage;
