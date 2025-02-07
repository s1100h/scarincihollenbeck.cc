import React, { useCallback, useState } from 'react';
import { ContainerDefault } from 'styles/Containers.style';
import {
  LibraryResultsPostsCount,
  LibraryResultsHolder,
  LibraryResultsLine,
  LibraryResultsSection,
  LibraryResultsBlock,
} from 'styles/library/LibraryResults.style';
import CustomSelect from 'components/common/Select';
import empty from 'is-empty';
import { LibraryCards } from 'styles/library/LibraryCategory.style';
import LibraryCard from 'components/molecules/library/LibraryCard';
import CustomPagination from 'components/atoms/CustomPagination';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import {
  setSelectedTags,
  setSelectedValues,
} from '../../../redux/slices/library.slice';
import LibraryTags from './LibraryTags';

const FiltersNoResults = dynamic(() => import('components/molecules/common/FiltersNoResults'));
const LogoSeparator = dynamic(() => import('components/common/LogoSeparator'));

const perPageOptions = [
  {
    title: '12',
    databaseId: '12-per-page',
  },
  {
    title: '24',
    databaseId: '24-per-page',
  },
  {
    title: '48',
    databaseId: '48-per-page',
  },
];

const mockTags = [
  {
    name: '1',
    uri: '/tag/commercialeviction',
    databaseId: 30406,
  },
  {
    name: '2',
    uri: '/tag/commercialleasing',
    databaseId: 30371,
  },
  {
    name: '3',
    uri: '/tag/landlordtenantlaw',
    databaseId: 30404,
  },
  {
    name: '4',
    uri: '/tag/leaseagreements',
    databaseId: 30407,
  },
  {
    name: '5',
    uri: '/tag/propertydisputes',
    databaseId: 3044609,
  },
  {
    name: 'propertymanagement',
    uri: '/tag/propertymanagement',
    databaseId: 30412305,
  },
  {
    name: 'realestateinvestment',
    uri: '/tag/realestateinvestment',
    databaseId: 340373,
  },
  {
    name: 'tenantrights',
    uri: '/tag/tenantrights',
    databaseId: 304508,
  },
  {
    name: 'commercialeviction',
    uri: '/tag/commercialeviction',
    databaseId: 304106,
  },
  {
    name: 'commercialleasing',
    uri: '/tag/commercialleasing',
    databaseId: 3036371,
  },
  {
    name: 'landlordtenantlaw',
    uri: '/tag/landlordtenantlaw',
    databaseId: 30412304,
  },
  {
    name: 'leaseagreements',
    uri: '/tag/leaseagreements',
    databaseId: 3057407,
  },
  {
    name: 'propertydisputes',
    uri: '/tag/propertydisputes',
    databaseId: 30124409,
  },
  {
    name: 'propertymanagement',
    uri: '/tag/propertymanagement',
    databaseId: 25235,
  },
  {
    name: 'realestateinvestment',
    uri: '/tag/realestateinvestment',
    databaseId: 30312373,
  },
  {
    name: 'tenantrights',
    uri: '/tag/tenantrights',
    databaseId: 30252414124408,
  },
  {
    name: 'commercialeviction',
    uri: '/tag/commercialeviction',
    databaseId: 3034624231425406,
  },
  {
    name: 'commercialleasing',
    uri: '/tag/commercialleasing',
    databaseId: 302351543425345371,
  },
  {
    name: 'landlordtenantlaw',
    uri: '/tag/landlordtenantlaw',
    databaseId: 3042352543654723504,
  },
  {
    name: 'leaseagreements',
    uri: '/tag/leaseagreements',
    databaseId: 30464562523407,
  },
  {
    name: 'propertydisputes',
    uri: '/tag/propertydisputes',
    databaseId: 304756252509,
  },
  {
    name: 'propertymanagement',
    uri: '/tag/propertymanagement',
    databaseId: 30245356405,
  },
  {
    name: 'realestateinvestment',
    uri: '/tag/realestateinvestment',
    databaseId: 3032352341273,
  },
  {
    name: 'tenantrights',
    uri: '/tag/tenantrights',
    databaseId: 30633463421408,
  },
  {
    name: 'commercialeviction',
    uri: '/tag/commercialeviction',
    databaseId: 3040626345262546,
  },
  {
    name: 'commercialleasing',
    uri: '/tag/commercialleasing',
    databaseId: 3031535436534771,
  },
  {
    name: 'landlordtenantlaw',
    uri: '/tag/landlordtenantlaw',
    databaseId: 30441241265342604,
  },
  {
    name: 'leaseagreements',
    uri: '/tag/leaseagreements',
    databaseId: 30414234123407,
  },
  {
    name: 'propertydisputes',
    uri: '/tag/propertydisputes',
    databaseId: 30134543252345409,
  },
  {
    name: 'propertymanagement',
    uri: '/tag/propertymanagement',
    databaseId: 302134312412341234654362405,
  },
  {
    name: 'realestateinvestment',
    uri: '/tag/realestateinvestment',
    databaseId: 3123412350373,
  },
  {
    name: 'tenantrights',
    uri: '/tag/tenantrights',
    databaseId: 30152352512351408,
  },
  {
    name: 'commercialeviction',
    uri: '/tag/commercialeviction',
    databaseId: 30222222222222222406,
  },
  {
    name: 'commercialleasing',
    uri: '/tag/commercialleasing',
    databaseId: 305555555555555555371,
  },
  {
    name: 'landlordtenantlaw',
    uri: '/tag/landlordtenantlaw',
    databaseId: 366666666666666660404,
  },
  {
    name: 'leaseagreements',
    uri: '/tag/leaseagreements',
    databaseId: 37777777777777770407,
  },
  {
    name: 'propertydisputes',
    uri: '/tag/propertydisputes',
    databaseId: 30423512351209,
  },
  {
    name: 'propertymanagement',
    uri: '/tag/propertymanagement',
    databaseId: 3042152134131242315643105,
  },
  {
    name: 'realestateinvestment',
    uri: '/tag/realestateinvestment',
    databaseId: 3537658567980373,
  },
  {
    name: 'tenantrights',
    uri: '/tag/tenantrights',
    databaseId: 3044835254143208,
  },
  {
    name: 'commercialeviction',
    uri: '/tag/commercialeviction',
    databaseId: 3040634535,
  },
  {
    name: 'commercialleasing',
    uri: '/tag/commercialleasing',
    databaseId: 3037344651,
  },
  {
    name: 'landlordtenantlaw',
    uri: '/tag/landlordtenantlaw',
    databaseId: 304352504,
  },
  {
    name: 'leaseagreements',
    uri: '/tag/leaseagreements',
    databaseId: 345740407,
  },
  {
    name: 'propertydisputes',
    uri: '/tag/propertydisputes',
    databaseId: 30423409,
  },
  {
    name: 'propertymanagement',
    uri: '/tag/propertymanagement',
    databaseId: 301234405,
  },
  {
    name: 'realestateinvestment',
    uri: '/tag/realestateinvestment',
    databaseId: 3547373,
  },
  {
    name: 'tenantrights',
    uri: '/tag/tenantrights',
    databaseId: 32340408,
  },
];

const LibraryResults = ({ tags, posts }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [perPage, setPerPage] = useState(12);
  const handleChangePerPage = (value) => {
    setPerPage(value);

    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, limit: value },
      },
      undefined,
      { shallow: true },
    );
  };

  const handleClearFilters = useCallback(() => {
    dispatch(setSelectedValues({}));
    dispatch(setSelectedTags([]));
    router.push('/library');
  }, []);

  return (
    <LibraryResultsSection>
      <ContainerDefault>
        {!empty(posts) ? (
          <>
            <FiltersNoResults
              message="Sorry, there are no results for your combination of filters. Try changing the category or reducing the number of filters."
              handleClickButton={handleClearFilters}
              buttonLabel="Reset filters"
            />

            <LogoSeparator direction="row" isBig />
          </>
        ) : (
          <LibraryResultsHolder>
            <LibraryTags tags={mockTags} />

            <LibraryResultsBlock>
              <LibraryResultsLine>
                <LibraryResultsPostsCount>{`1 - ${perPage} of 158`}</LibraryResultsPostsCount>

                <CustomSelect
                  options={perPageOptions}
                  inputValue={perPage}
                  placeHolder={`${perPage}`}
                  onChange={({ title }) => handleChangePerPage(title)}
                />
              </LibraryResultsLine>

              {!empty(posts) && (
                <LibraryCards>
                  {posts?.map((post) => (
                    <LibraryCard
                      key={post.databaseId}
                      title={post?.title}
                      image={post?.featuredImage?.node?.sourceUrl}
                      uri={post?.uri}
                      description={post?.excerpt}
                      author={post?.author?.node}
                      date={post?.date}
                      tags={post?.tags?.nodes}
                    />
                  ))}
                </LibraryCards>
              )}
            </LibraryResultsBlock>

            <CustomPagination
              totalItems={posts?.total}
              currentPage={posts?.page}
              limit={posts?.limit}
            />
          </LibraryResultsHolder>
        )}
      </ContainerDefault>
    </LibraryResultsSection>
  );
};

export default LibraryResults;
