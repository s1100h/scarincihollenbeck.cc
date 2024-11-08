const industryCommonQuery = `
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
`;

export const cannabisIndustryQuery = `
query CannabisIndustryQuery {
  industry(id: "/industries/cannabis", idType: URI) {
    ${industryCommonQuery}
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

export const entertainmentAndMediaIndustryQuery = `
query EntertainmentAndMediaIndustryQuery {
  industry(id: "/industries/entertainment-and-media", idType: URI) {
    ${industryCommonQuery}
    entertainmentAndMediaIndustry {
      subTitle
      attorneysTitleBox
      sliderBackgrounds {
        backgroundImage {
          sourceUrl
          title
          databaseId
        }
        title
      }
      entertainmentInfoBlock {
        tabs {
          imageBackground {
            databaseId
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
          title
          imagePosition
          lawInfo {
            description
            servicesList {
              title
            }
          }
          modalData {
            modalServicesDescription
            moreServicesList {
              title
            }
          }
        }
      }
      clientsBlock {
        description
        title
      }
      practicesList {
        title
        imageUnderTitle {
          sourceUrl
          title
          mediaDetails {
            width
            height
          }
        }
      }
    }
  }
}`;
