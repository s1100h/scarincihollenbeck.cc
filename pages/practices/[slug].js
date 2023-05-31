import React, { useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { PRODUCTION_URL, CORE_PRACTICES } from 'utils/constants';
import PracticePage from 'components/pages/PracticePage';
import ApolloWrapper from 'layouts/ApolloWrapper';
import { fetchAPI } from '../../utils/api';
import { getDataForPractice } from '../../utils/graphql-queries';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

const attorneysSanitize = (attorneysArr) => {
  const designationOrder = [
    'Firm Managing Partner',
    'Deputy Managing Partner',
    'Partner',
    'Counsel',
    'Of Counsel',
    'Senior Associate',
    'Associate',
  ];

  return attorneysArr
    .map((attorney) => {
      attorney.attorneyMainInformation.profileImage = attorney.attorneyMainInformation.profileImage.sourceUrl;
      return {
        databaseId: attorney.databaseId,
        link: attorney.uri,
        title: attorney.title,
        ...attorney.attorneyMainInformation,
      };
    })
    .sort((a, b) => {
      const indexA = designationOrder.indexOf(a.designation);
      const indexB = designationOrder.indexOf(b.designation);

      return indexA - indexB;
    });
};

const getPracticeAttorneys = async (uri) => {
  const data = await fetchAPI(getDataForPractice, {
    variables: {
      id: uri,
    },
  });

  if (!data) {
    return {
      practice: undefined,
    };
  }

  if (data.practice) {
    if (!data.practice?.practicesIncluded?.childPractice) {
      data.practice.practicesIncluded.childPractice = [];
    }

    if (!data.practice?.practicesIncluded?.relatedBlogCategory) {
      data.practice.practicesIncluded.relatedBlogCategory = [];
    }
  }

  const includeAttorney = data.practice?.practicesIncluded.includeAttorney
    ? attorneysSanitize(data.practice.practicesIncluded.includeAttorney)
    : undefined;

  const practiceChief = data.practice?.practicesIncluded.sectionChief
    ? attorneysSanitize(data.practice.practicesIncluded.sectionChief)
    : undefined;

  return {
    practice: data.practice,
    includeAttorney,
    practiceChief,
  };
};

/** Set single practice data to page props */
export const getServerSideProps = async ({ params, res, resolvedUrl }) => {
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=60, stale-while-revalidate');
  const { practice, includeAttorney, practiceChief } = await getPracticeAttorneys(resolvedUrl);

  if (typeof practice === 'undefined') {
    return {
      notFound: true,
    };
  }

  const attorneysSchemaChair = practiceChief?.length > 0
    ? practiceChief?.map((attorney) => ({
      '@type': 'Person',
      name: attorney.title,
      image: attorney.profileImage,
      url: attorney.link,
      telephone: attorney.phoneNumber,
      jobTitle: 'Attorney',
    }))
    : [];

  const attorneysSchemaAttorneyList = includeAttorney?.length > 0
    ? includeAttorney?.map((attorney) => ({
      '@type': 'Person',
      name: attorney.title,
      image: attorney.profileImage,
      url: attorney.link,
      telephone: attorney.phoneNumber,
      jobTitle: 'Attorney',
    }))
    : [];

  const attorneysSchemaAttorney = [...attorneysSchemaChair, ...attorneysSchemaAttorneyList];

  return {
    props: {
      practice,
      chairPractice: practiceChief || [],
      attorneyListPractice: includeAttorney || [],
      attorneysSchemaData: attorneysSchemaAttorney,
      practiceChildren: practice?.practicesIncluded?.childPractice,
      slug: params.slug,
    },
  };
};

/** Single practice page component */
const SinglePractice = ({
  practice,
  practiceChildren,
  slug,
  attorneysSchemaData,
  chairPractice,
  attorneyListPractice,
}) => {
  const [corePractices] = useState(CORE_PRACTICES);
  const router = useRouter();
  const practiceUrl = router.asPath.replace('/practices/', '').replace('/practice/', '');
  const canonicalUrl = `${PRODUCTION_URL}/practices/${practice.slug}`;

  if (router.isFallback) {
    return <SiteLoader />;
  }

  const siteTabs = practice.practicesIncluded.contentSection.map((tab, index) => ({
    ...tab,
    id: index,
  }));

  const fullTabs = [
    ...siteTabs,
    {
      id: 99,
      title: 'Related Articles',
      content: '<h4>Related Articles</h4>',
    },
  ];

  const practiceProps = {
    corePractices,
    practice,
    practiceChildren,
    attorneysSchemaData,
    practiceUrl,
    canonicalUrl,
    tabs: fullTabs,
    slug,
    chairPractice,
    attorneyListPractice,
  };
  return (
    <ApolloWrapper>
      <PracticePage {...practiceProps} />
    </ApolloWrapper>
  );
};

export default SinglePractice;
