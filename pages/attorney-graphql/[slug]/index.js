import {
  attorneySlugs, attorneyBySlug, attorneyFirmBlog, attorneyNewsEvents,
} from 'utils/api';
import { fetchExternalPosts } from 'utils/helpers';
import { MUSIC_ESQ_URL, CON_LAW_URL, GOV_LAW_URL } from 'utils/constants';

export default function AttorneyProfileQraphQL({ attorneyFooterBlogArticles }) {
  return <>Well get there..</>;
}

export async function getStaticPaths() {
  const request = await attorneySlugs();

  const paths = request.map(({ node }) => ({
    params: {
      slug: node.slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  /** Get Attorney Bio  */
  const slug = params.slug;
  const attorneyBio = await attorneyBySlug(slug);

  /** Get Attorney/Author Internal Posts */
  const authorId = attorneyBio.attorneyAuthorId.authorId.userId;
  const attorneyFirmPosts = await attorneyFirmBlog(authorId);

  /** Get Firm News/Events About Attorney */
  const attorneySearchName = attorneyBio.title.replace(', Jr.', '');
  const attorneyFirmNewsEvents = await attorneyNewsEvents(attorneySearchName);

  /** Get Attorney External Blog Posts */
  let rawExternalPosts = [];
  const availBlogs = attorneyBio.attorneyAwardsClientsBlogsVideos.blogId.map((bl) => Object.entries(bl).filter(([, value]) => value !== null))[0];

  for (let i = 0; i < availBlogs.length; i++) {
    const site = availBlogs[i][0];
    const authorId = availBlogs[i][1];

    if (site.includes('constitutionalLawReporter')) {
      const posts = await fetchExternalPosts(CON_LAW_URL, authorId, 1);
      rawExternalPosts = [...posts];
    }

    if (site.includes('governmentLaw')) {
      const posts = await fetchExternalPosts(GOV_LAW_URL, authorId, 1);
      rawExternalPosts = [...posts];
    }
  }

  /**
   * Sanitize Data
   * to ship to the client
   * */

  /** Merge all blog posts */
  const externalPosts = rawExternalPosts.map(
    ({
      id, link, better_featured_image, title, date,
    }) => ({
      id,
      link,
      image: better_featured_image.source_url,
      title: title.rendered,
      date,
    }),
  );

  const internalPosts = attorneyFirmPosts.edges.map(({ node }, index) => ({
    id: index,
    link: node.uri,
    title: node.title,
    image: node.featuredImage.node.sourceUrl,
    date: node.date,
  }));

  const attorneyFooterBlogArticles = [...externalPosts, ...internalPosts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .filter((_, i) => i < 3);

  /** SEO meta data */
  const seo = {
    title: attorneyBio.seo.title,
    canonicalLink: `attorney/${params.slug}`,
    metaDescription: attorneyBio.seo.metaDescription,
    image: attorneyBio.attorneyMainInformation.profileImage.sourceUrl,
    designation: attorneyBio.attorneyMainInformation.designation,
    socialMediaLinks: attorneyBio.attorneyMainInformation.socialMediaLinks,
  };

  /** Profile header data */
  const profileHeader = {
    name: attorneyBio.attorneyMainInformation.firstName,
    firstName: attorneyBio.attorneyMainInformation.firstName,
    profileImage: attorneyBio.attorneyMainInformation.profileImage.sourceUrl,
    title: attorneyBio.attorneyMainInformation.designation,
    practices: attorneyBio.attorneyPrimaryRelatedPracticesLocationsGroups.relatedPractices.map(
      ({ uri, title }) => ({
        link: uri,
        title,
      }),
    ),
    offices: attorneyBio.attorneyPrimaryRelatedPracticesLocationsGroups.officeLocation.map(
      ({ uri, title, id }) => ({
        link: uri,
        name: title,
        ID: id,
      }),
    ),
    vizibility: attorneyBio.attorneyMainInformation.vizibility,
    chair: attorneyBio.attorneyChairCoChair.chair.map(({ id, uri, title }) => ({
      title,
      link: uri,
    })),
    coChair: attorneyBio.attorneyChairCoChair.coChair.map(({ id, uri, title }) => ({
      title,
      link: uri,
    })),
    // emailForwarding:
    // additionalHeaderLinks:
  };

  /** Tab content (Main) --- an array of title, content  */

  /** Tab content (More) --- an array of title, content  */
  return {
    props: {
      seo,
      profileHeader,
      attorneyFooterBlogArticles,
    },
    revalidate: 60,
  };
}
