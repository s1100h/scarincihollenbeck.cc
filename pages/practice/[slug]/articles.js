import { useRouter } from 'next/router';
import AttorneyProfilePractice from 'components/pages/practice/articles';
import SinglePracticePage from 'components/pages/practice/page';
import SiteLoader from 'components/shared/site-loader';
import { sortByKey } from 'utils/helpers';
import { SITE_URL } from 'utils/constants';
import { getPracticePaths, getPracticeContent, getPracticePosts } from 'utils/queries';

export default function PracticeSingleArticles({
  corePractices,
  practice,
  practiceChildren,
  posts,
}) {
  const router = useRouter();
  const practiceUrl = router.asPath.replace('/practices/', '').replace('/practice/', '');
  const canoncialUrl = `${SITE_URL}/practice/${practice.slug}`;
  const isEducation = router.query.slug === 'education-law';
  const isCrisisManagement = router.query.slug === 'crisis-risk-management';
  const practiceProps = {
    corePractices,
    practice,
    practiceChildren,
    practiceUrl,
    canoncialUrl,
    isEducation,
    isCrisisManagement,
    handleLink: (e) => router.push(e.target.value),
  };

  if (router.isFallback) {
    return <SiteLoader />;
  }

  return (
    <SinglePracticePage {...practiceProps}>
      <AttorneyProfilePractice
        tabTitle="related-articles"
        initalArticles={posts}
        title={practice.title}
      />
    </SinglePracticePage>
  );
}

export async function getStaticPaths() {
  const paths = await getPracticePaths(true);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [res, practices] = await getPracticeContent(params.slug);

  if (res.status === 404) {
    return {
      notFound: true,
    };
  }

  const corePractices = practices.practices.filter(
    (practice) => practice.category === 'Core Practices',
  );

  /** get parent category */
  const blogId = res.blog_data_id[0];
  const practiceSlug = res.slug;

  const posts = await getPracticePosts(practiceSlug, blogId);

  return {
    props: {
      practice: res,
      practiceChildren: res.children || [],
      corePractices: sortByKey(corePractices, 'title'),
      posts: posts || [],
      term: params.slug,
    },
    revalidate: 1,
  };
}
