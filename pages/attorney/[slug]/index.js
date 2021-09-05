import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';
import AttorneyProfile from 'layouts/attorney-profile';
import { getAttorneyPaths, getAttorneyContent } from 'utils/queries';

export default function AttorneyBioProfile({
  bio,
  seo,
  contact,
  content,
  slug,
  attorneyFooterBlogArticles,
  attorneyFooterNewsArticles,
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
        seo={seo}
        body={{
          bio,
          content,
        }}
        attorneyFooterBlogArticles={attorneyFooterBlogArticles}
        attorneyFooterNewsArticles={attorneyFooterNewsArticles}
        header={{
          image: bio.headerContent.profileImage,
          profile: { ...bio.headerContent, ...contact },
        }}
      />
    </>
  );
}

export async function getStaticPaths() {
  const request = await getAttorneyPaths();
  const paths = request.map((a) => `/attorney${a.link}`);
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const [bio, contact, content, attorneyBlogArticles, attorneyNewsArticles] = await getAttorneyContent(params.slug);

  if (bio.status === 404) {
    return {
      notFound: true,
    };
  }

  let attorneyFooterBlogArticles = [];
  let attorneyFooterNewsArticles = [];

  if (!Object.keys(attorneyBlogArticles).includes('status')) {
    const firstThreeBlogs = attorneyBlogArticles
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
      .filter((_, i) => i <= 3);

    attorneyFooterBlogArticles = [...firstThreeBlogs];
  }

  if (!Object.keys(attorneyNewsArticles).includes('status')) {
    const firstThreeNews = attorneyNewsArticles
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
      .filter((_, i) => i <= 3);

    attorneyFooterNewsArticles = [...firstThreeNews];
  }

  const seo = {
    title: bio.seo.title,
    canonicalLink: bio.seo.canonicalLink,
    metaDescription: bio.seo.metaDescription,
    image: bio.seo.featuredImg,
    designation: bio.headerContent.title,
    socialMediaLinks: bio.seo.socialMedia,
  };

  return {
    props: {
      bio,
      seo,
      contact,
      content,
      slug: params.slug,
      attorneyFooterBlogArticles,
      attorneyFooterNewsArticles,
    },
    revalidate: 1,
  };
}
