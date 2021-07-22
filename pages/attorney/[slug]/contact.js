import { useRouter } from 'next/router';
import SiteLoader from 'components/site-loader';
import { headers } from 'utils/helpers';

import AttorneyProfile from 'layouts/attorney-profile';

export default function AttorneyBioProfileContact({
  bio,
  seo,
  contact,
  content,
  slug,
  attorneyFooterBlogArticles,
  attorneyFooterNewsArticles
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
    paths: res.map((a) => `/attorney${a.link}/contact`) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // keep bio for presentations, publications & blogs
  const [bio, contact, content, attorneyBlogArticles, attorneyNewsArticles] = await Promise.all([
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/attorney-profile/main/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/attorney-profile/contact/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/attorney-profile/attorney/${params.slug}/back-page/biography`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/attorney-profile/attorney/${params.slug}/back-page/blogs`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/attorney-profile/attorney/${params.slug}/back-page/news-press-releases`,
      { headers },
    ).then((data) => data.json()),
  ]);

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

    attorneyFooterBlogArticles = [...firstThreeBlogs]
  }

  if (!Object.keys(attorneyNewsArticles).includes('status')) {
    const firstThreeNews = attorneyNewsArticles
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
      .filter((_, i) => i <= 3);

    attorneyFooterNewsArticles = [...firstThreeNews]
  }

  const seo = {
    title: `Contact ${bio.seo.title}`,
    canonicalLink: bio.seo.canonicalLink,
    metaDescription: `Get in touch with ${bio.seo.title} by filling out the contact form. We look forward to learning more about your legal needs.`,
    image: bio.seo.featuredImg,
    designation: bio.headerContent.title,
    socialMediaLinks: bio.seo.socialMedia
  };

  return {
    props: {
      bio,
      seo,
      contact,
      content,
      slug: params.slug,
      attorneyFooterBlogArticles,
      attorneyFooterNewsArticles
    },
    revalidate: 1,
  };
}
