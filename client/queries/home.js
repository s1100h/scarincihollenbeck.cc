export const metaDataQuery = `{
  page(id: 29494, idType: DATABASE_ID) {
    seo {
      title
      metaDesc
    }
  }
}`;

export const blogArticlesQuery = (id) => `{
  category(id: ${id}, idType: DATABASE_ID) {
    posts(first: 10) {
      edges {
        node {
          title
          id
          link
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
          date
          postsLocationSelection {
            locationSelection
          }
          author {
            node {
              name
              uri
              email
            }
          }
        }
      }
    }
  }
}`;

export const officeLocationsQuery = `{
  officeLocations {
    nodes {
      title
      id
      officeMainInformation {
        officeBuildingTitle
        streetAddress
        poBox
        floor
        addressLocality
        addressRegion
        addressCountry
        phone
        fax
      }
      slug
      uri
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
}`;

export const corePracticesQuery = `{
  practices(first: 100) {
    edges {
      node {
        title
        uri
        practicePortalPageContent {
          practicePortalCategories
        }
      }
    }
  }
}`;
