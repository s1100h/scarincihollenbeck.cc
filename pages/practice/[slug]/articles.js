import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';
import { SITE_URL, CORE_PRACTICES, BASE_API_URL } from 'utils/constants';
import { getPracticeContent } from 'pages/api/practice-content';
import PracticePage from 'components/pages/practice-page';

export default function PracticeSingleArticles({
  corePractices,
  practice,
  practiceChildren,
  type,
  slug,
}) {
  const router = useRouter();
  const practiceUrl = router.asPath.replace('/practices/', '').replace('/practice/', '');
  const canoncialUrl = `${SITE_URL}/practice/${practice.slug}`;

  if (router.isFallback) {
    return <SiteLoader />;
  }

  const body = {
    title: 'Related Articles',
    url: `${BASE_API_URL}/wp-json/wp/v2/posts/?categories=${practice.blogId}`,
  };

  const practiceProps = {
    corePractices,
    practice,
    practiceChildren,
    practiceUrl,
    canoncialUrl,
    body,
    slug,
    type,
  };

  return <PracticePage {...practiceProps} />;
}

export async function getServerSideProps({ params }) {
  const request = await getPracticeContent(params.slug);

  if (request.status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      practice: request.data,
      practiceChildren: request.data.children || [],
      corePractices: CORE_PRACTICES,
      type: 'articles',
      slug: params.slug,
    },
  };
}
