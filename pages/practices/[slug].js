import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { PRODUCTION_URL, googleLocationIds } from 'utils/constants';
import ApolloWrapper from 'layouts/ApolloWrapper';
import empty from 'is-empty';
import PracticePageNew from 'components/pages/PracticePageNew';
import { getJustClientAlertOnePost } from '../../requests/graphql-queries';
import { fetchAPI } from '../../requests/api';
import { getPracticeAttorneys } from '../../requests/practices/practice-default';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

export const postsSanitize = (posts) => posts.map((post) => {
  post.featuredImage = post.featuredImage?.node.sourceUrl
      || '/images/no-image-found-diamond-750x350.png';
  return post;
});

const getClientAlertPost = async () => {
  const data = await fetchAPI(getJustClientAlertOnePost);

  if (!data) {
    return [];
  }

  return postsSanitize(data.posts.nodes);
};

/** Set single practice data to page props */
export const getServerSideProps = async ({ params, res, resolvedUrl }) => {
  res.setHeader(
    'Cache-Control',
    'max-age=0, s-maxage=60, stale-while-revalidate',
  );
  const {
    practice,
    includeAttorney,
    practiceChief,
    keyContactsList,
    corePractices,
    posts,
    faq,
  } = await getPracticeAttorneys(resolvedUrl);
  const clientAlertPost = await getClientAlertPost();

  // 04.04.2024 Google reviews temporarily disabled
  // const googleReviews = await getGoogleReviewsForPalaces(
  //   Object.values(googleLocationIds),
  // );

  const latestFromTheFirm = [...posts, ...clientAlertPost];
  if (empty(practice)) {
    return {
      redirect: {
        destination: '/practices?notFound=true',
        permanent: true,
      },
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

  const attorneysSchemaAttorney = [
    ...attorneysSchemaChair,
    ...attorneysSchemaAttorneyList,
  ];

  return {
    props: {
      practice,
      chairPractice: practiceChief || [],
      attorneyListPractice: includeAttorney || [],
      keyContactsList,
      attorneysSchemaData: attorneysSchemaAttorney,
      corePractices,
      practiceChildren: practice?.practicesIncluded?.childPractice,
      latestFromTheFirm,
      slug: params.slug,
      faq,
      // googleReviews: deleteReviewsWithoutComment(googleReviews.flat()),
    },
  };
};

/** Single practice page component */
const SinglePractice = ({
  practice,
  corePractices,
  practiceChildren,
  slug,
  attorneysSchemaData,
  chairPractice,
  attorneyListPractice,
  keyContactsList,
  latestFromTheFirm,
  faq,
  googleReviews,
}) => {
  const router = useRouter();
  const practiceUrl = router.asPath
    .replace('/practices/', '')
    .replace('/practice/', '');
  const canonicalUrl = `${PRODUCTION_URL}/practices/${practice.slug}`;

  if (router.isFallback) {
    return <SiteLoader />;
  }

  const siteTabs = practice.practicesIncluded.contentSection.map(
    (tab, index) => ({
      ...tab,
      id: index,
    }),
  );

  const fullTabs = [
    ...siteTabs,
    // related articles not used on new pages practices 02.01.2024
    // {
    //   id: 99,
    //   title: 'Related Articles',
    //   content: '<h4>Related Articles</h4>',
    // },
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
    keyContactsList,
    latestFromTheFirm,
    faq,
    googleReviews,
  };
  return (
    <ApolloWrapper>
      <PracticePageNew {...practiceProps} />
    </ApolloWrapper>
  );
};

export default SinglePractice;
