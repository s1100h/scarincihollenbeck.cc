import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { PRODUCTION_URL, ScarinciHollenbeckKeyContact } from 'utils/constants';
import PracticePage from 'components/pages/PracticePage';
import ApolloWrapper from 'layouts/ApolloWrapper';
import empty from 'is-empty';
import { fetchAPI } from '../../utils/api';
import { getDataForPractice, getJustClientAlertOnePost } from '../../utils/graphql-queries';

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

      if (indexA !== indexB) {
        return indexA - indexB; // Sort by designation order first
      }
      return a.lastName.localeCompare(b.lastName); // If designations are the same, sort by last name
    });
};

export const postsSanitize = (posts) => posts.map((post) => {
  post.featuredImage = post.featuredImage?.node.sourceUrl || '/images/no-image-found-diamond-750x350.png';
  return post;
});

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

    if (!data.practice.practicesIncluded.keyContactByPractice) {
      data.practice.practicesIncluded.keyContactByPractice = [];
    }
  }

  let includeAttorney = data.practice?.practicesIncluded.includeAttorney
    ? attorneysSanitize(data.practice.practicesIncluded.includeAttorney)
    : [];

  const practiceChief = data.practice?.practicesIncluded.sectionChief
    ? attorneysSanitize(data.practice.practicesIncluded.sectionChief)
    : [];

  const keyContactsArr = data.practice.practicesIncluded.keyContactByPractice
    ? attorneysSanitize(data.practice.practicesIncluded.keyContactByPractice)
    : [];

  const postsForSidebar = data.posts?.nodes ? postsSanitize(data.posts.nodes) : [];

  const corePractices = data.practices.nodes.filter(
    (practice) => !empty(practice.practicesIncluded.childPractice) && practice,
  );

  if (includeAttorney && practiceChief) {
    includeAttorney = includeAttorney.filter((attorney) => {
      const isDuplicate = practiceChief.some(
        (sectionAttorney) => attorney.databaseId === sectionAttorney.databaseId,
      );
      return !isDuplicate;
    });
  }

  const concatAttorneys = [...practiceChief, ...keyContactsArr];
  const keyContacts = concatAttorneys.length > 0 ? concatAttorneys : [ScarinciHollenbeckKeyContact];

  return {
    practice: data.practice,
    includeAttorney,
    practiceChief,
    keyContactsList: keyContacts,
    corePractices,
    posts: postsForSidebar,
  };
};

const getClientAlertPost = async () => {
  const data = await fetchAPI(getJustClientAlertOnePost);

  if (!data) {
    return [];
  }

  return postsSanitize(data.posts.nodes);
};

/** Set single practice data to page props */
export const getServerSideProps = async ({ params, res, resolvedUrl }) => {
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=60, stale-while-revalidate');
  const {
    practice, includeAttorney, practiceChief, keyContactsList, corePractices, posts,
  } = await getPracticeAttorneys(resolvedUrl);
  const clientAlertPost = await getClientAlertPost();

  const latestFromTheFirm = [...posts, ...clientAlertPost];

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
      keyContactsList,
      attorneysSchemaData: attorneysSchemaAttorney,
      corePractices,
      practiceChildren: practice?.practicesIncluded?.childPractice,
      latestFromTheFirm,
      slug: params.slug,
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
}) => {
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
    keyContactsList,
    latestFromTheFirm,
  };
  return (
    <ApolloWrapper>
      <PracticePage {...practiceProps} />
    </ApolloWrapper>
  );
};

export default SinglePractice;
