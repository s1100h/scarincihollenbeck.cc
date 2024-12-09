export const practicesQuery = `query PracticeQuery($id: ID!) {
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
            qrCodeBioPage {
              sourceUrl
            }
            qrCodeLinkedin {
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
            qrCodeBioPage {
              sourceUrl
            }
            qrCodeLinkedin {
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
      whyChooseUs {
        description
        title
      }
      awards {
        appearanceOrder
        awardImage {
          sourceUrl
        }
        label
        year
      }
    }
    seo {
      title
      metaDesc
    }
  }
}`;
