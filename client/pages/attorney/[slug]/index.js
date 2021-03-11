import { useRouter } from 'next/router';
import SiteLoader from 'components/site-loader';
import AttorneyProfile from 'layouts/attorney-profile';
import BasicContent from 'components/singleattorney/basic-content';
import { headers } from 'utils/helpers';

export default function AttorneySingleBio({ bio }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    );
  }

  return (
    <AttorneyProfile
      path={router.asPath}
      bio={bio}
      content={(
        <BasicContent
          title=""
          id="biography"
          content={bio.mainPageContent.biography.join('')}
          links={{
            label: 'Read more',
            link: `${router.asPath}/content/biography`,
          }}
        />
      )}
    />
  );
}

export async function getStaticPaths() {
  const [res] = await Promise.all([
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/attorney-search/attorneys',
      { headers },
    ).then((data) => data.json()),
  ]);

  return {
    paths: res.map((a) => `/attorney${a.link}`) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // keep bio for presentations, publications & blogs
  const [bio] = await Promise.all([
    fetch(
      `http://localhost:8400/wp-json/attorney-profile/main/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
  ]);

  if (bio.status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      bio,
    },
    revalidate: 1,
  };
}
