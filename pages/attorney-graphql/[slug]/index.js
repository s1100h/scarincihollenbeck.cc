import {
  attorneySlugs, attorneyBySlug, attorneyFirmBlog, attorneyNewsEvents,
} from 'utils/api';
import { fetchExternalPosts } from 'utils/helpers';
import { MUSIC_ESQ_URL, CON_LAW_URL, GOV_LAW_URL } from 'utils/constants';

export default function AttorneyProfileQraphQL({
  seo,
  profileHeader,
  attorneyFooterBlogArticles,
  attorneyFooterNewsArticles,
  mainTabs,
  moreTabs,
}) {
  // console.log({
  //   seo,
  //   profileHeader,
  //   attorneyFooterBlogArticles,
  //   attorneyFooterNewsArticles,
  //   mainTabs,
  //   moreTabs
  // })
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
  if (attorneyBio.attorneyAwardsClientsBlogsVideos.blogId) {
    const availBlogs = attorneyBio.attorneyAwardsClientsBlogsVideos.blogId.map((bl) => Object.entries(bl).filter(([, value]) => value !== null))[0];

    for (let i = 0; i < availBlogs.length; i++) {
      const site = availBlogs[i][0];
      const authorId = availBlogs[i][1];

      if (site.includes('constitutionalLawReporter')) {
        const posts = await fetchExternalPosts(CON_LAW_URL, authorId, 100);
        rawExternalPosts = [...posts];
      }

      if (site.includes('governmentLaw')) {
        const posts = await fetchExternalPosts(GOV_LAW_URL, authorId, 100);
        rawExternalPosts = [...posts];
      }

      if (site.includes('music')) {
        const posts = await fetchExternalPosts(MUSIC_ESQ_URL, authorId, 100);
        rawExternalPosts = [...posts];
      }
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

  const blogArticles = [...externalPosts, ...internalPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  /** Attorney News & Events */
  const newsArticles = attorneyFirmNewsEvents.edges.map(({ node }, index) => ({
    id: index,
    link: node.uri,
    title: node.title,
    image: node.featuredImage.node.sourceUrl,
    date: node.date,
  }));

  /** SEO meta data */
  const seo = {
    title: attorneyBio.seo.title,
    canonicalLink: `attorney/${params.slug}`,
    metaDescription: attorneyBio.seo.metaDesc,
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
    chair: attorneyBio.attorneyChairCoChair.chair
      ? attorneyBio.attorneyChairCoChair.chair.map(({ uri, title }) => ({
        title,
        link: uri,
      }))
      : [],
    coChair: attorneyBio.attorneyChairCoChair.coChair
      ? attorneyBio.attorneyChairCoChair.coChair.map(({ uri, title }) => ({
        title,
        link: uri,
      }))
      : [],
    emailForwarding: attorneyBio.attorneyMainInformation.forwardingEmailsForContactForm.map(
      ({ email }) => email,
    ),
  };

  /** Tab list */
  const mainTabs = attorneyBio.attorneyTabNavigation.mainMenu;
  const moreTabs = attorneyBio.attorneyTabNavigation.moreMenu;

  /** Tab content  -- Biography, Media, Presentations, Publications, Representative Matters, Representative Clients, Videos, Additional Tabs */

  const additionalTabs = [1, 2, 3, 4, 5]
    .map((i) => ({
      title: attorneyBio.attorneyAdditionalTabs[`tabHeader${i}`],
      content: attorneyBio.attorneyAdditionalTabs[`tabContent${i}`],
    }))
    .filter((a) => a.title !== null);

  const tabs = [
    {
      title: 'Biography',
      content: attorneyBio.attorneyBiography.biographyContent,
    },
    {
      title: 'Media',
      content: {
        header: attorneyBio.attorneyMedia.attorneyMedia.header,
        body: attorneyBio.attorneyMedia.attorneyMedia.body,
      },
    },
    {
      title: 'Presentations',
      content: {
        header: attorneyBio.attorneyPresentations.attorneyPresentations.header,
        body: attorneyBio.attorneyPresentations.attorneyPresentations.body,
      },
    },
    {
      title: 'Publications',
      content: {
        header: attorneyBio.attorneyPublications.attorneyPublications.header,
        body: attorneyBio.attorneyPublications.attorneyPublications.body,
      },
    },
    {
      title: 'Representative Matters',
      content: attorneyBio.attorneyRepresentativeMatters.repMatters
        ? attorneyBio.attorneyRepresentativeMatters.repMatters[0].content
        : [],
    },
    {
      title: 'Representative Clients',
      content: attorneyBio.attorneyRepresentativeClients.repClients
        ? attorneyBio.attorneyRepresentativeClients.repClients[0].content
        : [],
    },
    {
      title: 'Videos',
      content: attorneyBio.attorneyAwardsClientsBlogVideos
        ? attorneyBio.attorneyAwardsClientsBlogVideos.attorneyVideos
        : [],
    },
    ...additionalTabs,
    {
      title: 'Blogs',
      content: blogArticles,
    },
    {
      title: 'News Press Releases',
      content: newsArticles,
    },
  ];

  const mainTabsMatched = mainTabs.map((tab) => tabs.filter((t) => t.title === tab)[0]);

  let moreTabsMatched = [];

  if (moreTabs) {
    const matchTabs = moreTabs.map((tab) => tabs.filter((t) => t.title === tab)[0]);

    moreTabsMatched = [...matchTabs];
  }

  /** Credentials --- Education, Bar Admissions, Affiliations, Additional Information */

  /** Awards */

  /** Clients */

  return {
    props: {
      seo,
      profileHeader,
      attorneyFooterBlogArticles: blogArticles.filter((_, i) => i <= 3),
      attorneyFooterNewsArticles: newsArticles.filter((_, i) => i <= 3),
      mainTabs: mainTabsMatched,
      moreTabs: moreTabsMatched,
    },
    revalidate: 60,
  };
}
