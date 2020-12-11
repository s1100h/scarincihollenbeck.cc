export const attorneySearch = query => {
  let formattedQuery;

  if(Object.keys(query) < 0) {
    console.log('we got this...')
  }

  return `{
    attorneyProfiles(first: 1000) {
      nodes {
        title
        slug
        attorneyMainInformation {
          designation
          phoneNumber
          email
          lastName
        }
        attorneyPrimaryRelatedPracticesLocationsGroups {
          relatedPractices {
            ... on Practice {
              title
              slug
            }
          }
          officeLocation {
            ... on OfficeLocation {
              id
              title
              slug
            }
          }
          primaryPractice {
            ... on Practice {
              id
              slug
              title
            }
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }`
}
export const allLocations = `{
  officeLocations {
    nodes {
      slug
      title
    }
  }
}`
export const allPractices = `{
  practices(first: 1000) {
    nodes {
      title
      slug
      practicesIncluded {
        childPractice {
          ... on Practice {
            id
            title
            slug
          }
        }
      }
      practicePortalPageContent {
        practicePortalCategories
      }
    }
  }
}`