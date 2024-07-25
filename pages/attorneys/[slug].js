import React from 'react';
import { fetchAPI } from 'requests/api';
import {
  attorneyBySlugQuery,
  attorneyNewsEventsQuery,
  checkAttorneyPostsQueryByIdAndSlug,
} from 'requests/graphql-queries';
import {
  concatNameUser,
  fetchExternalPosts,
  formatSrcToCloudinaryUrl,
  formatSrcToCloudinaryUrlPdf,
  sanitizeExternalArticles,
} from 'utils/helpers';
import { GOV_LAW_URL } from 'utils/constants';
import ApolloWrapper from 'layouts/ApolloWrapper';
import AttorneyProfilePage from 'components/pages/AttorneyProfilePage';

/** Get the attorneys bio database on their slug */
export async function attorneyBySlug(slug) {
  const data = await fetchAPI(attorneyBySlugQuery, {
    variables: { slug },
  });
  return data.attorneyProfileBy;
}

/** Get all the news/events based on the attorneys name */
export async function attorneyNewsEvents(name) {
  const data = await fetchAPI(attorneyNewsEventsQuery, {
    variables: { name },
  });
  return data?.posts?.edges;
}

/** Get all the attorneys blog posts using GraphQL */
export async function attorneyFirmNewsBlogEvents(slug) {
  const blogs = await fetchAPI(checkAttorneyPostsQueryByIdAndSlug, {
    variables: { categoryId: 599, slug },
  });
  const events = await fetchAPI(checkAttorneyPostsQueryByIdAndSlug, {
    variables: { categoryId: 99, slug },
  });
  const releases = await fetchAPI(checkAttorneyPostsQueryByIdAndSlug, {
    variables: { categoryId: 98, slug },
  });
  return [
    {
      postLabel: 'Blogs',
      cursorStart: blogs.posts.pageInfo.startCursor,
    },
    {
      postLabel: 'News Press Releases',
      cursorStart: releases.posts.pageInfo.startCursor,
    },
    {
      postLabel: 'Events',
      cursorStart: events.posts.pageInfo.startCursor,
    },
  ];
}

const newsSanitize = (newsArr) => newsArr.map(({ node }) => {
  node.featuredImage = node.featuredImage?.node?.sourceUrl
    ? node.featuredImage?.node?.sourceUrl
    : '/images/no-image-found-diamond.png';
  node.slug = `/${node.categories.nodes[0].slug}/${node.slug}`;
  let uri = node.uri;
  uri = uri.split('/');
  uri = `/${uri.slice(3).join('/')}`;
  node.uri = uri;
  node.author = node.author.node.name;
  return {
    ...node,
  };
});

const attorneysSlugsQuery = `
query attorneysSlugs {
  attorneyProfiles(first: 100) {
    nodes {
      slug
    }
  }
}`;

const excludedSlugs = ['scarinci-hollenbeck'];

export async function getStaticPaths() {
  const listId = await fetchAPI(attorneysSlugsQuery);

  const paths = [];

  listId.attorneyProfiles.nodes.forEach((node) => {
    if (excludedSlugs.includes(node?.slug)) {
      return;
    }
    paths.push(`/attorneys/${node?.slug}`);
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

/** Set data from API response to page props WARNING: This is a large function */
export const getStaticProps = async ({ params }) => {
  /** Get Attorney Bio  */
  const slug = params?.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const attorneyBio = await attorneyBySlug(slug);
  if (!attorneyBio) {
    return {
      redirect: {
        destination: '/attorneys?notFound=true',
        permanent: true,
      },
    };
  }

  /** Create new tabs for Government and Law & Con Law  & Drop Music esq */
  /** Get Attorney/Author Internal Posts */
  const authorId = attorneyBio.attorneyMainInformation.profileImage.authorDatabaseId;

  /** Get Firm News/Events About Attorney */
  const newsPosts = newsSanitize(await attorneyNewsEvents(slug));

  /** Get Attorney External Blog Posts */
  const govLawPosts = {};
  if (attorneyBio.attorneyAwardsClientsBlogsVideos.blogId) {
    const availBlogs = attorneyBio.attorneyAwardsClientsBlogsVideos.blogId.map(
      (bl) => Object.entries(bl).filter(([, value]) => value !== null),
    )[0];

    for (let i = 0; i < availBlogs.length; i++) {
      const site = availBlogs[i][0];
      const authorId = availBlogs[i][1];

      if (site.includes('governmentLaw')) {
        const posts = await fetchExternalPosts(GOV_LAW_URL, authorId, 14);
        govLawPosts.id = authorId;

        if (posts?.length > 0) {
          govLawPosts.posts = sanitizeExternalArticles(posts);
        } else {
          govLawPosts.posts = [];
        }
      }
    }
  }

  /** SEO meta data */
  const seo = {
    title: attorneyBio.seo?.title,
    canonicalLink: `attorneys/${params.slug}`,
    metaDescription: attorneyBio.seo?.metaDesc,
    image: formatSrcToCloudinaryUrl(
      attorneyBio.attorneyMainInformation.profileImage?.sourceUrl,
    ),
    designation: attorneyBio.attorneyMainInformation?.designation,
    socialMediaLinks: attorneyBio.attorneyMainInformation?.socialMediaLinks,
  };

  /** Profile header data */
  const profileHeader = {
    name: concatNameUser(
      attorneyBio?.title,
      attorneyBio?.attorneyMainInformation.abbreviation,
    ),
    firstName: attorneyBio.attorneyMainInformation?.firstName,
    profileImage: formatSrcToCloudinaryUrl(
      attorneyBio.attorneyMainInformation.profileImage?.sourceUrl,
    ),
    representativeVideo:
      attorneyBio.attorneyMainInformation.representativeVideo,
    title: attorneyBio.attorneyMainInformation?.designation,
    contact: {
      phoneNumber: attorneyBio.attorneyMainInformation?.phoneNumber,
      email: attorneyBio.attorneyMainInformation?.email,
      fax: attorneyBio.attorneyMainInformation?.faxNumber,
      vizibility: attorneyBio.attorneyMainInformation?.vizibility,
      pdf:
        formatSrcToCloudinaryUrlPdf(
          attorneyBio.attorneyMainInformation?.pdfBio?.mediaItemUrl,
        ) || null,
      socialMediaLinks: attorneyBio.attorneyMainInformation?.socialMediaLinks,
    },
    primaryPractices:
      attorneyBio.attorneyPrimaryRelatedPracticesLocationsGroups
        ?.primaryPractice
      && attorneyBio.attorneyPrimaryRelatedPracticesLocationsGroups.primaryPractice.map(
        ({ uri, title, id }) => ({
          id,
          uri,
          title,
        }),
      ),
    practices: attorneyBio.attorneyPrimaryRelatedPracticesLocationsGroups
      .relatedPractices
      ? attorneyBio.attorneyPrimaryRelatedPracticesLocationsGroups.relatedPractices.map(
        ({ uri, title }) => ({
          uri,
          title,
        }),
      )
      : [
        ...attorneyBio.attorneyPrimaryRelatedPracticesLocationsGroups
          .primaryPractice,
      ],
    offices:
      attorneyBio.attorneyPrimaryRelatedPracticesLocationsGroups.officeLocation.map(
        ({ uri, id, officeMainInformation }) => ({
          link: uri,
          name: officeMainInformation.addressLocality,
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
    emailForwarding:
      attorneyBio.attorneyMainInformation.forwardingEmailsForContactForm.map(
        ({ email }) => email,
      ),
    attorneyBiography: attorneyBio?.attorneyBiography,
    education:
      attorneyBio?.attorneyAdditionalInformationEducationAdmissionsAffiliations
        ?.education,
    barAdmissions:
      attorneyBio?.attorneyAdditionalInformationEducationAdmissionsAffiliations
        ?.barAdmissions,
  };

  /** Tab list */
  const mainTabs = attorneyBio.attorneyTabNavigation.mainMenu;

  if (typeof mainTabs === 'undefined') {
    attorneyBio.attorneyTabNavigation.mainMenu = [];
  }
  mainTabs.unshift('General');

  // Replace the Biography tab to start
  const index = mainTabs.findIndex((tab) => tab === 'Biography');
  if (index !== -1) {
    [mainTabs[0], mainTabs[index]] = [mainTabs[index], mainTabs[0]];
  }

  const moreMenu = attorneyBio.attorneyTabNavigation?.moreMenu;

  if (moreMenu === null) {
    attorneyBio.attorneyTabNavigation.moreMenu = [];
  }

  const isContentArr = await attorneyFirmNewsBlogEvents(slug);

  const moreTabs = [];

  isContentArr?.forEach(({ postLabel, cursorStart }) => {
    if (cursorStart?.length > 0) {
      moreTabs.push(postLabel);
    }
  });

  /** Tab content  -- Biography, Media, Presentations, Publications, Representative Matters, Representative Clients, Videos, Additional Tabs */
  const additionalTabs = [1, 2, 3, 4, 5]
    .map((i) => ({
      id: i,
      title: attorneyBio.attorneyAdditionalTabs[`tabHeader${i}`],
      content: attorneyBio.attorneyAdditionalTabs[`tabContent${i}`],
    }))
    .filter((a) => a.title !== null);

  if (additionalTabs.length > 0) {
    additionalTabs.forEach(({ title }) => {
      mainTabs.push(title);
    });
  }

  if (moreTabs.length > 0) mainTabs.push('More');

  if (moreMenu !== null) moreTabs.push(...moreMenu);

  const externalBlogTabs = [];

  if (Object.keys(govLawPosts).includes('posts')) {
    externalBlogTabs.push({
      id: 17,
      title: 'Government & Law',
      content: govLawPosts,
    });
  }

  const commonTabs = [
    {
      id: 7,
      title: 'Representative Matters',
      content: attorneyBio.attorneyRepresentativeMatters.repMatters
        ? attorneyBio.attorneyRepresentativeMatters.repMatters[0].content
        : [],
    },
    {
      id: 8,
      title: 'Representative Clients',
      content: attorneyBio.attorneyRepresentativeClients.repClients
        ? attorneyBio.attorneyRepresentativeClients.repClients[0].content
        : [],
    },
    {
      id: 9,
      title: 'Media',
      content: {
        header: attorneyBio.attorneyMedia.attorneyMedia.header,
        body: attorneyBio.attorneyMedia.attorneyMedia.body,
      },
    },
    {
      id: 10,
      title: 'Presentations',
      content: {
        header: attorneyBio.attorneyPresentations.attorneyPresentations.header,
        body: attorneyBio.attorneyPresentations.attorneyPresentations.body,
      },
    },
    {
      id: 11,
      title: 'Publications',
      content: {
        header: attorneyBio.attorneyPublications.attorneyPublications.header,
        body: attorneyBio.attorneyPublications.attorneyPublications.body,
      },
    },
    {
      id: 12,
      title: 'Video',
      content: attorneyBio.attorneyAwardsClientsBlogsVideos
        ? attorneyBio.attorneyAwardsClientsBlogsVideos.attorneyVideos
        : [],
    },
    {
      id: 13,
      title: 'Images',
      content: attorneyBio.attorneyAwardsClientsBlogsVideos
        ? attorneyBio.attorneyAwardsClientsBlogsVideos.images
        : [],
    },
  ];

  const tabs = [
    {
      id: 5,
      title: 'Biography',
      content: {
        bio: attorneyBio.attorneyBiography.biographyContent,
        clients: attorneyBio.attorneyAwardsClientsBlogsVideos?.clients,
      },
    },
    {
      id: 6,
      title: 'General',
      content: {
        miniBio: attorneyBio.attorneyBiography?.miniBio,
        education:
          attorneyBio
            ?.attorneyAdditionalInformationEducationAdmissionsAffiliations
            ?.education,
        barAdmissions:
          attorneyBio
            ?.attorneyAdditionalInformationEducationAdmissionsAffiliations
            ?.barAdmissions,
        affiliations:
          attorneyBio
            ?.attorneyAdditionalInformationEducationAdmissionsAffiliations
            ?.affiliations,
        additionalInfo:
          attorneyBio
            ?.attorneyAdditionalInformationEducationAdmissionsAffiliations
            ?.additionalInformation,
        clients: attorneyBio.attorneyAwardsClientsBlogsVideos?.clients,
      },
    },
    ...additionalTabs,
    ...commonTabs,
    ...externalBlogTabs,
    {
      id: 188,
      title: 'More',
      content: [
        ...commonTabs,
        ...externalBlogTabs,
        {
          id: 14,
          title: 'Blogs',
          content: {
            id: authorId,
          },
        },
        {
          id: 15,
          title: 'News Press Releases',
          content: {
            id: slug,
          },
        },
        {
          id: 16,
          title: 'Events',
          content: {
            id: slug,
          },
        },
      ],
    },
  ];

  /** Sanitize main tab section */
  const mainTabsMatched = mainTabs
    .map(
      (tabMapItem) => tabs.filter((tabFilterItem) => tabFilterItem.title === tabMapItem)[0],
    )
    .filter((item) => item !== undefined);

  mainTabsMatched.map((tab) => {
    if (tab.title === 'More') {
      const moreTabsArr = [];
      moreTabs.forEach((tabItem) => {
        tab.content.forEach((subTab) => {
          if (tabItem === subTab.title) {
            moreTabsArr.push(subTab);
          }
        });
      });
      tab.content = moreTabsArr;
      return tab;
    }
    return tab;
  });

  /** Accordion data */
  const accordionData = {
    clients: attorneyBio.attorneyAwardsClientsBlogsVideos?.clients,
    awards: attorneyBio.attorneyAwardsClientsBlogsVideos?.awards,
    attorneyBiography: attorneyBio?.attorneyBiography,
    affiliations:
      attorneyBio?.attorneyAdditionalInformationEducationAdmissionsAffiliations
        ?.affiliations,
    representativeMatters: attorneyBio.attorneyRepresentativeMatters.repMatters
      ? attorneyBio.attorneyRepresentativeMatters.repMatters[0].content
      : [],
    additionalTabs,
    mediaContent: {
      header: attorneyBio.attorneyMedia.attorneyMedia.header,
      body: attorneyBio.attorneyMedia.attorneyMedia.body,
    },
    gallery: attorneyBio.attorneyAwardsClientsBlogsVideos
      ? attorneyBio.attorneyAwardsClientsBlogsVideos.images
      : [],
  };

  return {
    props: {
      seo,
      profileHeader,
      attorneyFooterNewsArticles: newsPosts.filter((_, i) => i <= 2),
      tabs: mainTabsMatched,
      accordionData,
    },
    revalidate: 3600,
  };
};

/** Attorney profile page component */
const AttorneyProfile = ({
  seo,
  profileHeader,
  attorneyFooterNewsArticles,
  tabs,
  accordionData,
}) => {
  const attorneyPageProps = {
    seo,
    profileHeader,
    attorneyFooterNewsArticles,
    tabs,
    accordionData,
  };

  return (
    <ApolloWrapper>
      <AttorneyProfilePage {...attorneyPageProps} />
    </ApolloWrapper>
  );
};

export default AttorneyProfile;
