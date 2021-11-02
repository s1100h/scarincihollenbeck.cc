import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';
import { SITE_URL, CORE_PRACTICES } from 'utils/constants';
import { urlify } from 'utils/helpers';
import { getPracticeContent } from 'pages/api/practice-content';
import PracticePage from 'components/pages/practice-page';

export default function PracticeSingleType({
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

  const tabs = Object.keys(practice.content).map((key) => ({
    title: practice.content[key][0].title,
    content: practice.content[key][1].content.replace(/(\r\n|\n|\r)/gm, '<p>'),
    slug: urlify(practice.content[key][0].title),
  }));

  const body = tabs.filter((tab) => tab.slug === type)[0];

  const practiceProps = {
    corePractices,
    practice,
    practiceChildren,
    practiceUrl,
    canoncialUrl,
    body,
    slug,
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
      type: params.type,
      slug: params.slug,
    },
  };
}
