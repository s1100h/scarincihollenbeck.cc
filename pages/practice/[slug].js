import React, { useState } from 'react';
import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/SiteLoader';
import { SITE_URL, CORE_PRACTICES } from 'utils/constants';
import { getPracticeContent } from 'utils/queries';
import PracticePage from 'components/pages/PracticePage';
import ApolloWrapper from 'layouts/ApolloWrapper';

export default function PracticeSingle({ practice, practiceChildren, slug }) {
  const [corePractices] = useState(CORE_PRACTICES);

  const router = useRouter();
  const practiceUrl = router.asPath.replace('/practices/', '').replace('/practice/', '');
  const canonicalUrl = `${SITE_URL}/practice/${practice.slug}`;

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
    canonicalUrl,
    tabs: fullTabs,
    slug,
  };
  return (
    <ApolloWrapper>
      <PracticePage {...practiceProps} />
    </ApolloWrapper>
  );
}

export async function getServerSideProps({ params, res }) {
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=60, stale-while-revalidate');
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
  };
}
