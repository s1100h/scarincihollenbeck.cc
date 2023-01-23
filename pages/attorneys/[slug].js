import React from 'react';
import { fetchAPI } from 'utils/api';
import { attorneyBySlugQuery, attorneyNewsEventsQuery } from 'utils/graphql-queries';
import {
  concatNameUser,
  fetchExternalPosts,
  formatSrcToCloudinaryUrl,
  formatSrcToCloudinaryUrlPdf,
  sanitizeExternalArticles,
} from 'utils/helpers';
import { CON_LAW_URL, GOV_LAW_URL } from 'utils/constants';
import AttorneyPage from 'components/pages/AttorneyProfile';
import ApolloWrapper from 'layouts/ApolloWrapper';

/** Get the attorneys bio data base on their slug */
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
// export async function attorneyFirmBlog(id) {
//   const data = await fetchAPI(attorneyFirmBlogQuery, {
//     variables: { id },
//   });
//   return data?.posts;
// }

const newsSanitize = (newsArr) => newsArr.map(({ node }) => {
  node.featuredImage = node.featuredImage?.node?.sourceUrl
    ? node.featuredImage?.node?.sourceUrl
    : '/images/no-image-found-diamond.png';
  node.slug = `/${node.categories.nodes[0].slug}/${node.slug}`;
  let uri = node.uri;
  uri = uri.split('/');
  uri = `/${uri.slice(3).join('/')}`;
  uri = uri[uri.length - 1] === '/' && uri.substring(0, uri.length - 1);
  node.uri = uri;
  node.author = node.author.node.name;
  return {
    ...node,
  };
});

/** Set data from API response to page props WARNING: This is a large function */
export const getServerSideProps = async ({ params, res }) => {
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=60, stale-while-revalidate');

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
      notFound: true,
    };
  }

  /** Create new tabs for Government and Law & Con Law  & Drop Music esq */
  /** Get Attorney/Author Internal Posts */
  const authorId = attorneyBio.attorneyMainInformation.profileImage.authorDatabaseId;

  /** Get Firm News/Events About Attorney */
  const newsPosts = newsSanitize(await attorneyNewsEvents(slug));

  /** Get Attorney External Blog Posts */
  const govLawPosts = {};
  const conLawPosts = {};
  if (attorneyBio.attorneyAwardsClientsBlogsVideos.blogId) {
    const availBlogs = attorneyBio.attorneyAwardsClientsBlogsVideos.blogId.map((bl) => Object.entries(bl).filter(([, value]) => value !== null))[0];

    for (let i = 0; i < availBlogs.length; i++) {
      const site = availBlogs[i][0];
      const authorId = availBlogs[i][1];

      if (site.includes('constitutionalLawReporter')) {
        const posts = await fetchExternalPosts(CON_LAW_URL, authorId, 14);
        conLawPosts.id = authorId;
        conLawPosts.posts = sanitizeExternalArticles(posts);
      }

      if (site.includes('governmentLaw')) {
        const posts = await fetchExternalPosts(GOV_LAW_URL, authorId, 14);
        govLawPosts.id = authorId;

        if (posts.length > 0) {
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
    image: formatSrcToCloudinaryUrl(attorneyBio.attorneyMainInformation.profileImage?.sourceUrl),
    designation: attorneyBio.attorneyMainInformation?.designation,
    socialMediaLinks: attorneyBio.attorneyMainInformation?.socialMediaLinks,
  };

  /** Profile header data */
  const profileHeader = {
    name: concatNameUser(attorneyBio?.title, attorneyBio?.attorneyMainInformation.abbreviation),
    firstName: attorneyBio.attorneyMainInformation?.firstName,
    profileImage: formatSrcToCloudinaryUrl(
      attorneyBio.attorneyMainInformation.profileImage?.sourceUrl,
    ),
    title: attorneyBio.attorneyMainInformation?.designation,
    contact: {
      phoneNumber: attorneyBio.attorneyMainInformation?.phoneNumber,
      email: attorneyBio.attorneyMainInformation?.email,
      fax: attorneyBio.attorneyMainInformation?.faxNumber,
      vizibility: attorneyBio.attorneyMainInformation?.vizibility,
      pdf:
        formatSrcToCloudinaryUrlPdf(attorneyBio.attorneyMainInformation?.pdfBio?.mediaItemUrl)
        || null,
      socialMediaLinks: attorneyBio.attorneyMainInformation?.socialMediaLinks,
    },
    primaryPractices:
      attorneyBio.attorneyPrimaryRelatedPracticesLocationsGroups?.primaryPractice
      && attorneyBio.attorneyPrimaryRelatedPracticesLocationsGroups.primaryPractice.map(
        ({ uri, title, id }) => ({
          id,
          uri,
          title,
        }),
      ),
    practices: attorneyBio.attorneyPrimaryRelatedPracticesLocationsGroups.relatedPractices
      ? attorneyBio.attorneyPrimaryRelatedPracticesLocationsGroups.relatedPractices.map(
        ({ uri, title }) => ({
          uri,
          title,
        }),
      )
      : [...attorneyBio.attorneyPrimaryRelatedPracticesLocationsGroups.primaryPractice],
    offices: attorneyBio.attorneyPrimaryRelatedPracticesLocationsGroups.officeLocation.map(
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
    emailForwarding: attorneyBio.attorneyMainInformation.forwardingEmailsForContactForm.map(
      ({ email }) => email,
    ),
  };

  /** Tab list */
  const mainTabs = attorneyBio.attorneyTabNavigation.mainMenu;
  mainTabs?.unshift('General');
  const moreTabs = attorneyBio.attorneyTabNavigation?.moreMenu;

  if (
    attorneyBio?.attorneyAdditionalInformationEducationAdmissionsAffiliations?.affiliations
      !== null
    && attorneyBio?.attorneyAdditionalInformationEducationAdmissionsAffiliations?.affiliations.length
      > 0
  ) {
    if (!moreTabs) {
      mainTabs.push('Affiliations');
    }
    moreTabs?.unshift('Affiliations');
  }

  if (moreTabs?.length > 0) mainTabs.push('More');

  /** Tab content  -- Biography, Media, Presentations, Publications, Representative Matters, Representative Clients, Videos, Additional Tabs */
  const additionalTabs = [1, 2, 3, 4, 5]
    .map((i) => ({
      id: i,
      title: attorneyBio.attorneyAdditionalTabs[`tabHeader${i}`],
      content: attorneyBio.attorneyAdditionalTabs[`tabContent${i}`],
    }))
    .filter((a) => a.title !== null);

  const externalBlogTabs = [];

  if (Object.keys(govLawPosts).includes('posts')) {
    externalBlogTabs.push({
      id: 16,
      title: 'Government & Law',
      content: govLawPosts,
    });
  }

  if (Object.keys(conLawPosts).includes('posts')) {
    externalBlogTabs.push({
      id: 17,
      title: 'Constitutional Law Reporter',
      content: conLawPosts,
    });
  }

  const tabs = [
    ...additionalTabs,
    {
      id: 5,
      title: 'General',
      content: {
        miniBio: attorneyBio.attorneyBiography?.miniBio,
        education:
          attorneyBio?.attorneyAdditionalInformationEducationAdmissionsAffiliations?.education,
        barAdmissions:
          attorneyBio?.attorneyAdditionalInformationEducationAdmissionsAffiliations?.barAdmissions,
        additionalInfo:
          attorneyBio?.attorneyAdditionalInformationEducationAdmissionsAffiliations
            ?.additionalInformation,
        clients: attorneyBio.attorneyAwardsClientsBlogsVideos?.clients,
      },
    },
    {
      id: 6,
      title: 'Biography',
      content: attorneyBio.attorneyBiography.biographyContent,
    },
    {
      id: 15,
      title: 'Affiliations',
      content:
        attorneyBio?.attorneyAdditionalInformationEducationAdmissionsAffiliations?.affiliations,
    },
    {
      id: 18,
      title: 'More',
      content: [
        {
          id: 7,
          title: 'Representative Matters',
          content: attorneyBio.attorneyRepresentativeMatters.repMatters
            ? attorneyBio.attorneyRepresentativeMatters.repMatters[0].content
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
          title: 'Videos',
          content: attorneyBio.attorneyAwardsClientsBlogsVideos
            ? attorneyBio.attorneyAwardsClientsBlogsVideos.attorneyVideos
            : [],
        },
        {
          id: 13,
          title: 'Blogs',
          content: {
            id: authorId,
          },
        },
        {
          id: 14,
          title: 'News Press Releases',
          content: {
            id: slug,
          },
        },
        {
          id: 15,
          title: 'Affiliations',
          content:
            attorneyBio?.attorneyAdditionalInformationEducationAdmissionsAffiliations?.affiliations,
        },
        ...externalBlogTabs,
      ],
    },
  ];

  /** Sanitize main tab section */
  const mainTabsMatched = mainTabs
    .map((tabMapItem) => tabs.filter((tabFilterItem) => tabFilterItem.title === tabMapItem)[0])
    .filter((item) => item !== undefined);

  mainTabsMatched.map((tab) => {
    if (tab.title === 'More') {
      const moreTabsArr = [];
      tab.content.forEach((tab) => {
        moreTabs.forEach((tabTitle) => {
          if (tab.title.includes(tabTitle)) {
            moreTabsArr.push(tab);
          }
        });
      });
      tab.content = moreTabsArr;
      return tab;
    }
    return tab;
  });

  /** Awards */
  const attorneyAwards = attorneyBio.attorneyAwardsClientsBlogsVideos?.awards;

  return {
    props: {
      seo,
      profileHeader,
      attorneyFooterNewsArticles: newsPosts.filter((_, i) => i <= 2),
      tabs: mainTabsMatched,
      additionalTabs,
      attorneyAwards,
    },
  };
};

/** Attorney profile page component */
const AttorneyProfile = ({
  seo,
  profileHeader,
  attorneyFooterNewsArticles,
  tabs,
  attorneyAwards,
}) => {
  const attorneyPageProps = {
    seo,
    profileHeader,
    attorneyFooterNewsArticles,
    tabs,
    attorneyAwards,
  };

  return (
    <ApolloWrapper>
      <AttorneyPage {...attorneyPageProps} />
    </ApolloWrapper>
  );
};

export default AttorneyProfile;
