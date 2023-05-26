import React, { useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import {
  PRODUCTION_URL, CORE_PRACTICES, BASE_API_URL, headers,
} from 'utils/constants';
import PracticePage from 'components/pages/PracticePage';
import ApolloWrapper from 'layouts/ApolloWrapper';
import { fetchAPI } from '../../utils/api';
import { getAttorneysForPractice } from '../../utils/graphql-queries';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

const attorneysSanitize = (attorneysArr) => attorneysArr.map((attorney) => {
  attorney.attorneyMainInformation.profileImage = attorney.attorneyMainInformation.profileImage.sourceUrl;
  return {
    databaseId: attorney.databaseId,
    link: attorney.uri,
    title: attorney.title,
    ...attorney.attorneyMainInformation,
  };
});

const getPracticeAttorneys = async (uri) => {
  const { practice } = await fetchAPI(getAttorneysForPractice, {
    variables: {
      id: uri,
    },
  });

  const includeAttorney = practice?.practicesIncluded.includeAttorney
    ? attorneysSanitize(practice.practicesIncluded.includeAttorney)
    : undefined;

  const practiceChief = practice?.practicesIncluded.sectionChief
    ? attorneysSanitize(practice.practicesIncluded.sectionChief)
    : undefined;

  return {
    includeAttorney,
    practiceChief,
  };
};
/** Fetch single practice data WP REST API  */
const getPracticeContent = async (slug) => {
  try {
    const res = await fetch(`${BASE_API_URL}/wp-json/individual-practices/practice/${slug}`, {
      headers,
    });

    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

/** Set single practice data to page props */
export const getServerSideProps = async ({ params, res, req }) => {
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=60, stale-while-revalidate');

  const slug = params?.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const { includeAttorney, practiceChief } = await getPracticeAttorneys(req.url);
  const request = await getPracticeContent(params.slug);

  if (Object.keys(request).includes('status') && request.status === 404) {
    return {
      notFound: true,
    };
  }

  if (Object.keys(request).includes('data') && request.data.status === 404) {
    return {
      notFound: true,
    };
  }

  if (includeAttorney) {
    request.attorneyList = includeAttorney;
  }

  if (practiceChief) {
    request.chair = practiceChief;
  }

  const attorneysSchemaChair = request?.chair.map((attorney) => ({
    '@type': 'Person',
    name: attorney.title,
    image: attorney.profileImage,
    url: attorney.link,
    telephone: attorney.phoneNumber,
    jobTitle: 'Attorney',
  }));

  const attorneysSchemaAttorneyList = request?.attorneyList.map((attorney) => ({
    '@type': 'Person',
    name: attorney.title,
    image: attorney.profileImage,
    url: attorney.link,
    telephone: attorney.phoneNumber,
    jobTitle: 'Attorney',
  }));

  const attorneysSchemaAttorney = [...attorneysSchemaChair, ...attorneysSchemaAttorneyList];

  return {
    props: {
      practice: request,
      attorneysSchemaData: attorneysSchemaAttorney,
      practiceChildren: request.children || [],
      slug: params.slug,
    },
  };
};

/** Single practice page component */
const SinglePractice = ({
  practice, practiceChildren, slug, attorneysSchemaData,
}) => {
  const [corePractices] = useState(CORE_PRACTICES);
  const router = useRouter();
  const practiceUrl = router.asPath.replace('/practices/', '').replace('/practice/', '');
  const canonicalUrl = `${PRODUCTION_URL}/practices/${practice.slug}`;

  if (router.isFallback) {
    return <SiteLoader />;
  }

  const siteTabs = practice.content.map((tab, index) => ({
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
  };
  return (
    <ApolloWrapper>
      <PracticePage {...practiceProps} />
    </ApolloWrapper>
  );
};

export default SinglePractice;
