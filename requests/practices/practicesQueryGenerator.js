export const practicesQuery = `query FirmPageQuery($id: ID!) {
  practice(id: $id, idType: URI) {
    databaseId
    slug
    title
    practicesIncluded {
			practiceImage {
					sourceUrl
				}
      faq {
        title
        description
      }
      contentSection {
        title
        content
      }
      description
      includeAttorney {
        ... on AttorneyProfile {
          databaseId
          uri
          title
          status
          attorneyMainInformation {
            designation
            email
            phoneNumber
            lastName
            profileImage {
              sourceUrl
            }
          }
          attorneyPrimaryRelatedPracticesLocationsGroups {
            officeLocation {
              ... on OfficeLocation {
                databaseId
                uri
                title
              }
            }
          }
        }
      }
      sectionChief {
        ... on AttorneyProfile {
          databaseId
          uri
          title
          status
          attorneyMainInformation {
            designation
            email
            phoneNumber
            lastName
            profileImage {
              sourceUrl
            }
          }
          attorneyPrimaryRelatedPracticesLocationsGroups {
            officeLocation {
              ... on OfficeLocation {
                databaseId
                uri
                title
              }
            }
          }
        }
      }
      childPractice {
        ... on Practice {
          databaseId
          title
          slug
        }
      }
      relatedBlogCategory {
        databaseId
      }
      keyContactByPractice {
        ... on AttorneyProfile {
          databaseId
          uri
          title
          status
          attorneyMainInformation {
            designation
            email
            phoneNumber
            profileImage {
              sourceUrl
            }
          }
          attorneyPrimaryRelatedPracticesLocationsGroups {
            officeLocation {
              ... on OfficeLocation {
                databaseId
                uri
                title
              }
            }
          }
        }
      }
    }
    seo {
      title
      metaDesc
    }
  }
  practices(first: 100) {
    nodes {
      title
      uri
      databaseId
      practicesIncluded {
        childPractice {
          ... on Practice {
            databaseId
          }
        }
      }
    }
  }
  posts(where: {categoryIn: [99, 98]}, first: 2) {
    nodes {
      uri
      title
      databaseId
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}`;
