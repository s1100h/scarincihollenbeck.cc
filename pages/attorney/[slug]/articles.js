import { useRouter } from 'next/router';
import SiteLoader from 'components/site-loader';
import { headers } from 'utils/helpers';

import AttorneyProfile from 'layouts/attorney-profile';

export default function AttorneyBioArticles({
  bio, contact, content, slug, footerArticles
}) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    );
  }

  return (
    <>
      <AttorneyProfile
        slug={slug}
        head={bio.seo}
        body={{
          bio,
          content,
        }}
        footerArticles={footerArticles}
        header={{
          image: bio.headerContent.profileImage,
          profile: { ...bio.headerContent, ...contact },
        }}
      />
    </>
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
    paths: res.map((a) => `/attorney${a.link}/articles`) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // keep bio for presentations, publications & blogs
  let noArticles = false;
  const [bio, contact, content, attorneyArticles] = await Promise.all([
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/attorney-profile/main/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/attorney-profile/contact/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/attorney-profile/attorney/${params.slug}/back-page/articles`,
      { headers },
    ).then((data) => data.json()),   
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/v2/search/query?offset=1&term=${params.slug}`,
      { headers },
    ).then((data) => data.json()),
  ]);

  if (bio.status === 404) {
    return {
      notFound: true,
    };
  }

  if(content.status === 404) {
    noArticles = true;
  }

  const footerArticles = attorneyArticles.results.filter((_, i) => i <= 3);

  return {
    props: {
      bio,
      contact,
      content: (noArticles) ? [] : content,
      slug: params.slug,
      footerArticles: footerArticles || []
    },
    revalidate: 1,
  };
}
