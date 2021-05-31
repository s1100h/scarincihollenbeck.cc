import { useRouter } from 'next/router';
import SiteLoader from 'components/site-loader';
import { headers } from 'utils/helpers';
import AttorneyProfile from 'layouts/attorney-profile';

export default function AttorneyBioProfile({
  bio, contact, content, slug,
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
  const attorneyPackPageLinks = [];

  res.forEach((attorney) => {
    attorney.sidebarLinks.forEach((contentLink) => {
      attorneyPackPageLinks.push(`/attorney${attorney.link}${contentLink}`);
    });
  });
  return {
    paths: attorneyPackPageLinks || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // keep bio for presentations, publications & blogs
  const [bio, contact, content] = await Promise.all([
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/attorney-profile/main/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/attorney-profile/contact/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/attorney-profile/attorney/${params.slug}/back-page/${params.type}`,
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
      contact,
      content,
      slug: params.slug,
    },
    revalidate: 1,
  };
}
