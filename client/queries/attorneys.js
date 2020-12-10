export const allAttorneysQuery = `{
  administrations(where: {orderby: {field: DATE, order: DESC}}) {
    edges {
      node {
        administration {
          name
          title
          email
          phoneExtension
          order
        }
        uri
        featuredImage {
          node {
            sourceUrl(size: CATEGORY_THUMB)
          }
        }
      }
    }
  }
}`

export const allPracticesQuery = `{
  administrations(where: {orderby: {field: DATE, order: DESC}}) {
    edges {
      node {
        administration {
          name
          title
          email
          phoneExtension
          order
        }
        uri
        featuredImage {
          node {
            sourceUrl(size: CATEGORY_THUMB)
          }
        }
      }
    }
  }
}`

export const allDesignationsQuery = `{
  administrations(where: {orderby: {field: DATE, order: DESC}}) {
    edges {
      node {
        administration {
          name
          title
          email
          phoneExtension
          order
        }
        uri
        featuredImage {
          node {
            sourceUrl(size: CATEGORY_THUMB)
          }
        }
      }
    }
  }
}`

export const allLocationsQuery = `{
  administrations(where: {orderby: {field: DATE, order: DESC}}) {
    edges {
      node {
        administration {
          name
          title
          email
          phoneExtension
          order
        }
        uri
        featuredImage {
          node {
            sourceUrl(size: CATEGORY_THUMB)
          }
        }
      }
    }
  }
}`

export const singleAttorneyQuery = slug => {
  return `{
    attorneyProfiles(where: {name: "${slug}"}) {
      edges {
        node {
          slug
          title
          uri
          attorneyAdditionalInformationEducationAdmissionsAffiliations {
            additionalInformation {
              content
              title
            }
            affiliations
            barAdmissions
            education
          }
          attorneyAdditionalTabs {
            tabContent1
            tabContent2
            tabContent3
            tabContent4
            tabContent5
            tabHeader1
            tabHeader2
            tabHeader3
            tabHeader4
            tabHeader5
          }
          attorneyAwardsClientsBlogsVideos {
            attorneyVideos {
              date
              title
              embedVideo
            }
            awards {
              awardTitle
              awardLink
              awardImage {
                sourceUrl
              }
            }
            blogId {
              constitutionalLawReporter
              governmentLaw
              musicEsq
            }
            clients {
              clientImage {
                sourceUrl
              }
              clientLink
              clientTitle
            }
          }
          attorneyBiography {
            biographyContent
          }
          attorneyChairCoChair {
            chair {
              ... on Practice {
                id
                title
                uri
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
          attorneyMainInformation {
            designation
            email
            faxNumber
            firstName
            lastName
            middleInitial
            pdfBio {
              sourceUrl
            }
            phoneNumber
            profileImage {
              sourceUrl
            }
            socialMediaLinks {
              url
              channel
            }
            vizibility
          }
          attorneyPrimaryRelatedPracticesLocationsGroups {
            firmGroups
            primaryPractice {
              ... on Practice {
                id
                uri
                title
              }
            }
            officeLocation {
              ... on OfficeLocation {
                id
                title
                uri
              }
            }
            relatedPractices {
              ... on Practice {
                id
                title
                uri
              }
            }
          }
          attorneyProfileId
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
          link
          seo {
            metaDesc
            title
          }
          attorneyAuthorId {
            authorId {
              posts {
                edges {
                  node {
                    title
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
                    link
                    date
                  }
                }
              }
              databaseId
            }
          }
        }
      }
    }
  }`
}


export const attorneysArticles = (category, name) => {
  return ` {
    categories(where: {name: "${category}"}) {
      nodes {
        name
        posts(first: 1000, where: {search: "${name}"}) {
          edges {
            node {
              title
              link
              date
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }`
}

export const getAllAttorneySlugs = `{
  attorneyProfiles(first: 500) {
    nodes {
      slug
    }
  }
}`