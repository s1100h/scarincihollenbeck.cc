export const attorneyBySlugQuery = `query AttorneyProfileBySlug($slug: String) {
  attorneyProfileBy(slug: $slug) {
    attorneyProfileId
    seo {
      title
      metaDesc
    }
    attorneyMainInformation {
      designation
      email
      faxNumber
      firstName
      lastName
      abbreviation
      forwardingEmailsForContactForm {
        email
      }
      middleInitial
      pdfBio {
        sourceUrl
        mediaItemUrl
      }
      phoneNumber
      profileImage {
        sourceUrl
        authorDatabaseId
      }
      socialMediaLinks {
        url
        channel
      }
      vizibility
    }
    attorneyAdditionalInformationEducationAdmissionsAffiliations {
      additionalInformation {
        content
      }
      affiliations
      barAdmissions
      education
    }
    attorneyBiography {
      biographyContent
      miniBio
    }
    attorneyAdditionalTabs {
      tabHeader1
      tabContent1
      tabHeader2
      tabContent2
      tabHeader3
      tabContent3
      tabHeader4
      tabContent4
      tabHeader5
      tabContent5
    }
    attorneyAwardsClientsBlogsVideos {
    	images {
        caption
        image {
          sourceUrl
          databaseId
        }
        orientationImage
      }
      attorneyVideos {
        date
        embedVideo
        title
      }
      awards {
        awardImage {
          sourceUrl(size: LARGE)
        }
        awardLink
        awardTitle
      }
      clients {
        clientImage {
          sourceUrl
          altText
          mediaDetails {
            height
            width
          }
        }
        clientLink
        clientTitle
      }
      blogId {
        constitutionalLawReporter
        governmentLaw
        musicEsq
      }
    }
    attorneyAuthorId {
      authorId {
        userId
      }
    }
    attorneyChairCoChair {
      chair {
        ... on Practice {
          id
          uri
          title
        }
      }
      coChair {
        ... on Practice {
          id
          title
          uri
        }
      }
    }
    attorneyMedia {
      attorneyMedia {
        header
        body
      }
    }
    attorneyPresentations {
      attorneyPresentations {
        body
        header
      }
    }
    attorneyPrimaryRelatedPracticesLocationsGroups {
      officeLocation {
        ... on OfficeLocation {
          id
          title(format: RENDERED)
          uri
          officeMainInformation {
            addressLocality
          }
        }
      }
      primaryPractice {
        ... on Practice {
          id
          title(format: RENDERED)
          uri
        }
      }
      relatedPractices {
        ... on Practice {
          id
          uri
          title(format: RENDERED)
        }
      }
    }
    attorneyPublications {
      attorneyPublications {
        body
        header
      }
    }
    attorneyRepresentativeClients {
      repClients {
        content
        title
      }
    }
    attorneyRepresentativeMatters {
      repMatters {
        content
        title
      }
    }
    title(format: RENDERED)
    attorneyTabNavigation {
      mainMenu
      moreMenu
    }
  }
}`;

export const attorneysQuery = `query FirmPageQuery {
  attorneyProfiles(first: 100) {
    nodes {
      databaseId
      slug
      title
      attorneyMainInformation {
        designation
        email
        phoneNumber
        lastName
        profileImage {
          sourceUrl(size: CATEGORY_THUMB)
        }
      }
      attorneyPrimaryRelatedPracticesLocationsGroups {
        officeLocation {
          ... on OfficeLocation {
            id
            uri
            title
            officeMainInformation {
              addressLocality
            }
          }
        }
        relatedPractices {
          ... on Practice {
            title
          }
        }
      }
    }
  }
}`;

export const officeLocationQuery = `query BasicPageQuery {
  officeLocations {
    nodes {
      databaseId
      title
      slug
      officeMainInformation {
        addressLocality
        mapLink
        phone
        streetAddress
        fax
        floor
        postCode
      }
    }
  }
}
`;

export const firmNewsQuery = `query authorPostsById {
  posts(first: 4, where: {categoryName: "Firm News"}) {
      nodes {
        date
        slug
        databaseId
        featuredImage {
          node {
            sourceUrl
          }
        }
        title(format: RENDERED)
        excerpt(format: RENDERED)
        author {
          node {
            name
            slug
          }
        }
      }
  }
}`;

export const miniOfficeLocationQuery = `query BasicPageQuery {
  officeLocations {
    nodes {
      databaseId
      slug
      title
      officeMainInformation {
        addressLocality
      }
    }
  }
}
`;

export const attorneyNewsEventsQuery = `query AttorneyNewsEventPosts($name: String) {
      posts(where: {search: $name}, first: 3) {
        edges {
          node {
            date
            featuredImage {
              node {
                sourceUrl(size: LARGE)
              }
            }
            title(format: RENDERED)
            categories {
              nodes {
                slug
              }
            }
            slug
            databaseId
            author {
              node {
                name
              }
            }
            uri
          }
        }
      }
    }`;

export const attorneyPostsQueryByIdAndSlug = `query AttorneyPostsById(
  $categoryId: [ID]
  $slug: String
  $first: Int
  $last: Int
  $after: String
  $before: String
  ) {
  posts(first: $first, last: $last, after: $after, before: $before, where: {categoryIn: $categoryId, search: $slug}) {
        edges {
      node {
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        uri
        title(format: RENDERED)
        excerpt(format: RENDERED)
        author {
          node {
            name
            url
          }
        }
      }
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
      hasPreviousPage
    }
  }}
`;

export const checkAttorneyPostsQueryByIdAndSlug = `query AttorneyPostsById(
  $categoryId: [ID]
  $slug: String
  $first: Int
  $last: Int
  $after: String
  $before: String
  ) {
  posts(first: $first, last: $last, after: $after, before: $before, where: {categoryIn: $categoryId, search: $slug}) {
    pageInfo {
      endCursor
      startCursor
      hasNextPage
      hasPreviousPage
    }
  }}
`;
export const postQuery = `query FirmPageQuery($id: ID!) {
  post(id: $id, idType: SLUG) {
      categories {
      nodes {
        databaseId
        name
        slug
        contentNodes(first: 4, where: {dateQuery: {before: {month: 2}}}) {
          nodes {
            ... on Post {
              title
              uri
              featuredImage {
                node {
                  sourceUrl
                }
              }
              databaseId
            }
          }
        }
      }
    }
    content
    title
    date
    seo {
      opengraphDescription
      title
    }
    selectAuthors {
      authorDisplayOrder {
        ... on AttorneyProfile {
          uri
          title
          databaseId
          attorneyMainInformation {
            profileImage {
              sourceUrl
            }
            email
            phoneNumber
            designation
          }
          attorneyBiography {
            miniBio
          }
        }
      }
    }
  }
    practices(first: 200) {
    nodes {
      title
      uri
      databaseId
      practicePortalPageContent {
        practicePortalCategories
      }
    }
  }
  posts(first: 3, where: {categoryId: 98}) {
    nodes {
      databaseId
      uri
      title
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          username
        }
      }
    }
  }
}`;

// , order by: {field: DATE, order: DESC}
export const categoryPostsByIdQuery = `query categoryPostsById(
  $first: Int
  $last: Int
  $after: String
  $before: String
  $id:Int
) {
  posts(where: {categoryId:$id},  first: $first, last: $last, after: $after, before: $before) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
    node {
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      uri
      title(format: RENDERED)
      excerpt(format: RENDERED)
      author {
        node {
          name
          url
        }
      }
    }
  }
  }
}`;

export const homePageAwardsQuery = `query HomePageAwardsQuery {
  homePageAwards {
    edges {
      node {
        title
        homePageAwards {
          label
          image {
            sourceUrl(size: LARGE)
          }
          appearanceOrder
          imageWidth
          imageHeight
        }
      }
    }
  }
}`;

export const authorPostsByIdQuery = `query authorPostsById(
  $first: Int
  $last: Int
  $after: String
  $before: String
  $id: String
) {
  posts(where: {search:$id},  first: $first, last: $last, after: $after, before: $before) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
    node {
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      uri
      title(format: RENDERED)
      excerpt(format: RENDERED)
      author {
        node {
          name
          url
        }
      }
    }
  }
  }
}`;

// Category Landing Page Query
export const categoryPostQuery = `query CategoryPosts($name:String) {
  categories(where: {slug: [$name]}) {
    edges {
      node {
        name
        seo {
          metaDesc
          title
        }
        children(first: 20) {
          nodes {
            slug
            name
            count
            id
          }
        }
        description
        posts(first: 4) {
          edges {
            node {
              categories(first: 1) {
                edges {
                  node {
                    name
                    link
                  }
                }
              }
              uri
              excerpt(format: RENDERED)
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }
              date
              author {
                node {
                  userId
                  name
                }
              }
            }
          }
        }
        databaseId
      }
    }
  }
}
`;

// contact/subscribe page query
export const contactSubscribePageQuery = `query ContactSubscribePageQuery($slug:String) {
  pageBy(uri: $slug) {
    seo {
      metaDesc
      title
    }
    title
    formPages {
      formLabel
    }
    content(format: RENDERED)
  }
}`;

/** home page content query */
export const homePageQuery = `query HomePageQuery {
  pageBy(uri: "front-page") {
    title
    homePage {
      aboutFirm {
        description
        linkLabel
        linkUrl
        title
        subTitle
      }
      aboutFirm2 {
        description
        linkLabel
        linkUrl
        title
        subTitle
      }
      awards {
        appearanceOrder
        imageHeight
        imageWidth
        label
        awardImage {
          sourceUrl
        }
      }
      bannerLineOne
      bannerLineTwo
      quote
      mainTag
      serviceOne {
        description
        linkLabel
        linkUrl
        title
        serviceImage {
          sourceUrl
        }
      }
      serviceTwo {
        description
        linkLabel
        linkUrl
        serviceImage {
          sourceUrl
        }
        title
      }
      subMainTag
      leadership {
        ... on Administration {
          id
          uri
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          administration {
            title
          }
        }
        ... on AttorneyProfile {
          id
          uri
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          attorneyMainInformation {
            designation
          }
          attorneyChairCoChair {
            chair {
              ... on Practice {
                id
                title
              }
            }
          }
        }
      }
      isHoliday
    }
    seo {
      metaDesc
      title
    }
  }
}
`;

/** home page locations query */
export const homePageLocationsQuery = `query LocationPagesQuery {
  officeLocations {
    edges {
      node {
        id
        slug
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
}`;

/** attorneys landing page query */
export const attorneysPageQuery = `query AttorneysPagesQuery {
  pageBy(pageId: 46642) {
    title
    seo {
      metaDesc
      title
    }
    attorneyArchives {
      description
      designationSectionTitles {
        name
        order
      }
    }
  }
}`;

/** attorneys landing page query */
export const attorneysSiteMapQuery = `query AttorneyProfileBySlug {
  attorneyProfiles(first: 200) {
    nodes {
      databaseId
      uri
    }
  }
}`;

/** practices landing page query */
export const practicePageQuery = `query PracticesPagesQuery {
  pageBy(pageId: 46644) {
    title
    seo {
      metaDesc
      title
    }
    practiceArchives {
      description
      mainTag
    }
  }
}`;

/** careers landing page query */
export const careersPageQuery = `query CareersPagesQuery {
  pageBy(pageId: 46660) {
    title
    seo {
      metaDesc
      title
    }
    careersPage {
      description
      equalEmploymentOpportunityContent
      positionTypes {
        name
      }
    }
  }
}`;

export const careersQuery = `query BasicPageQuery {
  careers {
    nodes {
      databaseId
      slug
      careerFields {
        contact
        duration
        position
        startDate
        positionLocation
        positionType
      }
    }
  }
}`;

export const covid19CrisisManagement = `query CareersPagesQuery {
  page(id: 32495, idType: DATABASE_ID) {
    title
    seo {
      metaDesc
      title
    }
    COVID19CrisisManagement {
      article
      banner {
        link
      }
      listLinks
      subtitle
    }
  }
}
`;

export const profileStatusQuery = `query BasicPageQuery($id: ID!) {
  attorneyProfile(id: $id, idType: SLUG) {
    status
  }
}`;

export const authorsPostQuery = `query FirmPageQuery {
  attorneyProfiles(first: 100) {
    nodes {
      attorneyAuthorId {
        authorId {
          uri
          name
          databaseId
          lastName
          firstName
          posts(first: 1) {
            nodes {
              databaseId
            }
          }
        }
      }
    }
  }
}`;

/** administration landing page query */
export const administrationPageQuery = `query AdministrationPagesQuery {
  pageBy(pageId: 46670) {
    title
    seo {
      metaDesc
      title
    }
    administrationArchive {
      description
    }
  }
}
`;

export const administrationPersoneQuery = `query FirmPageQuery($id: ID!) {
  administration(id: $id, idType: URI) {
    databaseId
    uri
    administration {
      name
      biography
      designation
      email
      abbreviation
      phoneExtension
      title
      vizibility
      featuredImage {
        sourceUrl
      }
      location {
        ... on OfficeLocation {
          officeMainInformation {
            addressLocality
          }
          uri
          id
        }
      }
      socialMediaLinks {
        channel
        url
      }
    }
    seo {
      metaDesc
      title
    }
  }
}
`;
export const adminKaterinTraughQuery = `query AttorneyPostsById {
  administration(id: "20875", idType: DATABASE_ID) {
    title
    uri
    databaseId
    administration {
      designation
      email
      phoneExtension
      location {
        ... on OfficeLocation {
          id
          title
          uri
          officeMainInformation {
            addressLocality
          }
        }
      }
      featuredImage {
        sourceUrl(size: CATEGORY_THUMB)
      }
    }
  }
}`;

/** basic pages query  */
export const basicPagesQuery = `query BasicPageQuery($slug: String) {
  pageBy(uri: $slug) {
    title
    seo {
      metaDesc
      title
    }
    content(format: RENDERED)
    addFormToPage {
      enableForm
      formLabel
    }
  }
}`;

/** Happy Holydays pages query  */
export const holidayPageQuery = `query BasicPageQuery {
  page(id: 155709, idType: DATABASE_ID) {
    title
    seo {
      metaDesc
      title
    }
    content(format: RENDERED)
    addFormToPage {
      enableForm
      formLabel
    }
  }
}
`;

/** querying firm pages content */
export const firmPagesQuery = `query FirmPageQuery($slug: String) {
  pageBy(uri: $slug) {
    title
    seo {
      metaDesc
      title
    }
    firmPagesRelatedPostsMembers {
      groupChair {
        ... on AttorneyProfile {
          id
          uri
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          attorneyMainInformation {
            designation
            email
            phoneNumber
            lastName
          }
        }
      }
      groupMembers {
        ... on AttorneyProfile {
          id
          uri
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          attorneyMainInformation {
            designation
            email
            phoneNumber
            lastName
          }
        }
      }
      relatedPosts {
        posts(first: 3) {
          edges {
            node {
              id
              uri
              date
              excerpt
              title(format: RENDERED)
              featuredImage{
                node{
                  sourceUrl
                }
              }
              author {
                 node {
                   name
                 }
              }
            }
          }
        }
      }
    }
    firmPagesDescription {
      description
    }
    firmPagesTabs {
      tab2Content
      tab2Header
      tab3Content
      tab3Header
      tab4Content
      tab4Header
      tab5Content
      tab5Header
      tabContent
      tabHeader
    }
  }
}`;

export const firmOverviewQuery = `query FirmOverviewQuery {
  pageBy(uri: "firm-overview") {
    title
    seo {
      metaDesc
      title
    }
    content
    firmOverviewTabs {
      additionalContent {
        content
        title
      }
      mainTabs {
        content
        subtitle
        title
        mainImage {
          sourceUrl
        }
      }
      firmChairsCochairs {
        ... on AttorneyProfile {
          slug
          title
          attorneyMainInformation {
            designation
            email
            phoneNumber
            profileImage {
              sourceUrl
            }
          }
          attorneyChairCoChair {
            chair {
              ... on Practice {
                id
                title
                slug
              }
            }
            coChair {
              ... on Practice {
                id
                title
                slug
              }
            }
          }
        }
      }
      firmLeaders {
        ... on Administration {
          id
          slug
          title
          administration {
            abbreviation
            email
            title
            phoneExtension
            featuredImage {
              sourceUrl
            }
          }
        }
        ... on AttorneyProfile {
          id
          slug
          title
          attorneyMainInformation {
            designation
            email
            phoneNumber
            profileImage {
              sourceUrl
            }
          }
        }
      }
      directors {
        ... on Administration {
          id
          title
          slug
          administration {
            email
            title
            phoneExtension
            order
            featuredImage {
              sourceUrl
            }
          }
        }
      }
    }
  }
}`;

export const attorneysAndAdminsQuery = `query AttorneysAndAdminsQuery {
  attorneyProfiles(first: 30) {
    edges {
      node {
        featuredImage {
          node {
            sourceUrl
          }
        }
        uri
        title
        attorneyMainInformation {
          phoneNumber
          email
          designation
          lastName
        }
      }
    }
  }
  administrations {
    edges {
      node {
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        uri
        administration {
          title
          phoneExtension
          email
          lastname
          order
        }
      }
    }
  }
}
`;

export const adminsQuery = `query AttorneyPostsById {
  administrations {
    nodes {
      databaseId
      uri
      title
      administration {
        email
        phoneExtension
        order
        location {
          ... on OfficeLocation {
            id
            uri
            officeMainInformation {
              addressLocality
            }
          }
        }
        designation
        featuredImage {
          sourceUrl
        }
      }
    }
  }
}`;

export const getIdDirectionPdfLittleFallsQuery = `query CareersPagesQuery {
  officeLocationBy(officeLocationId: 29436) {
    officeMainInformation {
      autoMap {
        link
      }
      trainStationsMap {
        link
      }
    }
  }
}
`;

export const getSEOforAuthorPosts = `query FirmOverviewQuery($id: ID!) {
  user(id: $id, idType: DATABASE_ID) {
    seo {
      title
      canonical
      metaDesc
    }
  }
}`;

export const getAuthorsQuery = `query FirmPageQuery {
  users(first: 100) {
    nodes {
      databaseId
      uri
      lastName
      firstName
      description
    }
  }
}
`;
