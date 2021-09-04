import { useRouter } from 'next/router';
import TabContent from 'react-bootstrap/TabContent';
import PracticeContent from 'components/singlepractice/content';
import SinglePracticePage from 'components/singlepractice/page';
import SiteLoader from 'components/site-loader';
import { urlify, sortByKey } from 'utils/helpers';
import { SITE_URL } from 'utils/constants';
import { getPracticePaths, getPracticeContent } from 'utils/queries';

export default function PracticeSingle({ corePractices, practice, practiceChildren }) {
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
      {practice.content.length > 0
        && practice.content.map((item) => (
          <TabContent key={item.title}>
            <PracticeContent
              tabTitle={urlify(item.title)}
              title={item.title}
              content={item.content}
            />
          </TabContent>
        ))}
    </SinglePracticePage>
  );
}

export async function getStaticPaths() {
  const paths = await getPracticePaths(false);

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

  return {
    props: {
      practice: res,
      practiceChildren: res.children || [],
      corePractices: sortByKey(corePractices, 'title'),
    },
    revalidate: 1,
  };
}
