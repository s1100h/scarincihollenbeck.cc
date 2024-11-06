export const cannabisIndustryQuery = `
query CannabisIndustryQuery {
  industry(id: "/industries/cannabis", idType: URI) {
    databaseId
    slug
    title
    industryContent {
      industryAttorneys {
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
      industryChief {
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
                id
                databaseId
                uri
                title
              }
            }
          }
        }
      }
      practices {
        ... on Practice {
          title
          databaseId
          uri
        }
      }
    }
    seo {
      title
      metaDesc
    }
    cannabisLawIndustry {
      cardsInfo {
        cards {
          title
          paragraph
        }
      }
      descriptionSubheader
      subTitle
      attorneysArticleBlock {
        paragraph
        title
      }
      keyContactsBlock {
        article
        listOfLegalGuidanceRegarding {
          issue
        }
      }
      helpArticleBlock {
        title
        paragraphs {
          paragraph
        }
      }
      newspaperBlock {
        article {
          paragraph
          title
        }
        newspaperBox {
          newspaperArticle
          newspaperPhotoBox {
            altText
            sourceUrl
            caption
          }
        }
      }
      subheaderBackgroundVideo {
        link
      }
      photoBlock {
        articleBox {
          paragraph
          title
        }
        cannabisClients {
          clientLink {
            title
            url
          }
          clientLogo {
            databaseId
            sourceUrl
            title
          }
          clientTitle
        }
      }
    }
  }
}`;
