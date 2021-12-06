import React from 'react';
import {
  attorneySlugs, attorneyBySlug, attorneyFirmBlog, attorneyNewsEvents,
} from 'utils/api';
import { fetchExternalPosts } from 'utils/helpers';
import { MUSIC_ESQ_URL, CON_LAW_URL, GOV_LAW_URL } from 'utils/constants';
import AttorneysPage from 'components/pages/AttorneyProfile';

export default function AttorneyProfileQraphQL({
  seo,
  profileHeader,
  attorneyFooterBlogArticles,
  attorneyFooterNewsArticles,
  mainTabs,
  moreTabs,
  attorneyCredentials,
  attorneyAwards,
  attorneyClients,
}) {
  const attorneyPageProps = {
    seo,
    profileHeader,
    attorneyFooterBlogArticles,
    attorneyFooterNewsArticles,
    mainTabs,
    moreTabs,
    attorneyCredentials,
    attorneyAwards,
    attorneyClients,
  };
  return <AttorneysPage {...attorneyPageProps} />;
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
  const noImageFound = '/images/no-image-found-diamond-750x350.png';

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
      image: better_featured_image?.source_url || noImageFound,
      title: title.rendered,
      date,
      excerpt: '',
    }),
  );

  const internalPosts = attorneyFirmPosts.edges.map(({ node }, index) => ({
    id: index,
    link: node.uri,
    image: node.featuredImage.node.sourceUrl,
    date: node.date,
    excerpt: node.excerpt,
    title: node.title,
  }));

  const blogArticles = [...externalPosts, ...internalPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  /** Attorney News & Events */
  const newsArticles = attorneyFirmNewsEvents.edges.map(({ node }, index) => ({
    id: index,
    link: node.uri,
    title: node.title,
    image: node.featuredImage.node.sourceUrl,
    date: node.date,
    excerpt: node.excerpt,
  }));

  /** SEO meta data */
  const seo = {
    title: attorneyBio.seo?.title,
    canonicalLink: `attorney/${params.slug}`,
    metaDescription: attorneyBio.seo?.metaDesc,
    image: attorneyBio.attorneyMainInformation.profileImage?.sourceUrl,
    designation: attorneyBio.attorneyMainInformation?.designation,
    socialMediaLinks: attorneyBio.attorneyMainInformation?.socialMediaLinks,
  };

  /** Profile header data */
  const profileHeader = {
    name: attorneyBio?.title,
    firstName: attorneyBio.attorneyMainInformation?.firstName,
    profileImage: attorneyBio.attorneyMainInformation.profileImage?.sourceUrl,
    title: attorneyBio.attorneyMainInformation?.designation,
    contact: {
      phoneNumber: attorneyBio.attorneyMainInformation?.phoneNumber,
      email: attorneyBio.attorneyMainInformation?.email,
      fax: attorneyBio.attorneyMainInformation?.faxNumber,
      vizibility: attorneyBio.attorneyMainInformation?.vizibility,
      pdf: attorneyBio.attorneyMainInformation?.pdfBio?.sourceUrl || null,
      additionalHeaderLinks: attorneyBio.attorneyMainInformation?.additionalHeaderLinks,
      socialMediaLinks: attorneyBio.attorneyMainInformation?.socialMediaLinks,
    },
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
      id: i,
      title: attorneyBio.attorneyAdditionalTabs[`tabHeader${i}`],
      content: attorneyBio.attorneyAdditionalTabs[`tabContent${i}`],
    }))
    .filter((a) => a.title !== null);

  const tabs = [
    ...additionalTabs,
    {
      id: 6,
      title: 'Biography',
      content: attorneyBio.attorneyBiography.biographyContent,
    },
    {
      id: 7,
      title: 'Media',
      content: {
        header: attorneyBio.attorneyMedia.attorneyMedia.header,
        body: attorneyBio.attorneyMedia.attorneyMedia.body,
      },
    },
    {
      id: 8,
      title: 'Presentations',
      content: {
        header: attorneyBio.attorneyPresentations.attorneyPresentations.header,
        body: attorneyBio.attorneyPresentations.attorneyPresentations.body,
      },
    },
    {
      id: 9,
      title: 'Publications',
      content: {
        header: attorneyBio.attorneyPublications.attorneyPublications.header,
        body: attorneyBio.attorneyPublications.attorneyPublications.body,
      },
    },
    {
      id: 10,
      title: 'Representative Matters',
      content: attorneyBio.attorneyRepresentativeMatters.repMatters
        ? attorneyBio.attorneyRepresentativeMatters.repMatters[0].content
        : [],
    },
    {
      id: 11,
      title: 'Representative Clients',
      content: attorneyBio.attorneyRepresentativeClients.repClients
        ? attorneyBio.attorneyRepresentativeClients.repClients[0].content
        : [],
    },
    {
      id: 12,
      title: 'Videos',
      content: attorneyBio.attorneyAwardsClientsBlogsVideos
        ? attorneyBio.attorneyAwardsClientsBlogsVideos.attorneyVideos
        : [],
    },
    {
      id: 13,
      title: 'Blogs',
      content: blogArticles,
    },
    {
      id: 14,
      title: 'News Press Releases',
      content: newsArticles,
    },
  ];

  const mainTabsMatched = mainTabs
    .map((tab) => tabs.filter((t) => t.title === tab)[0])
    .filter((a) => a !== undefined);
  let moreTabsMatched = [];

  if (moreTabs) {
    const matchTabs = moreTabs
      .map((tab) => tabs.filter((t) => t.title.includes(tab))[0])
      .filter((a) => a !== undefined);

    moreTabsMatched = [...matchTabs];
  }

  /** Credentials --- Education, Bar Admissions, Affiliations, Additional Information */
  const attorneyCredentials = attorneyBio.attorneyAdditionalInformationEducationAdmissionsAffiliations;

  /** Awards */
  const attorneyAwards = attorneyBio.attorneyAwardsClientsBlogsVideos?.awards;

  /** Clients */
  const attorneyClients = attorneyBio.attorneyAwardsClientsBlogsVideos?.clients;

  return {
    props: {
      seo,
      profileHeader,
      attorneyFooterBlogArticles: blogArticles.filter((_, i) => i <= 2),
      attorneyFooterNewsArticles: newsArticles.filter((_, i) => i <= 2),
      mainTabs: mainTabsMatched,
      moreTabs: moreTabsMatched,
      attorneyCredentials,
      attorneyAwards,
      attorneyClients,
    },
    revalidate: 60,
  };
}
