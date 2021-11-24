import React, { useState } from 'react';
import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';
import { SITE_URL, CORE_PRACTICES } from 'utils/constants';
import { getPracticePaths, getPracticeContent } from 'utils/queries';
import PracticePage from 'components/pages/practice-page';

export default function PracticeSingle({ practice, practiceChildren, slug }) {
  const [corePractices] = useState(CORE_PRACTICES);

  const router = useRouter();
  const practiceUrl = router.asPath.replace('/practices/', '').replace('/practice/', '');
  const canoncialUrl = `${SITE_URL}/practice/${practice.slug}`;

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
    practiceUrl,
    canoncialUrl,
    tabs: fullTabs,
    slug,
  };
  return <PracticePage {...practiceProps} />;
}

export async function getStaticPaths() {
  const paths = await getPracticePaths();
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const request = await getPracticeContent(params.slug);
  if (request.status === 404) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      practice: request,
      practiceChildren: request.children || [],
      slug: params.slug,
    },
    revalidate: 60,
  };
}
