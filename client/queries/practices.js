export const getPracticesByInput = (input) => `{
  searchWP(where: {input: "${input}"}, first: 1000) {
    nodes {
      ... on Practice {
        id
        title
        uri
        practicesIncluded {
          childPractice {
            ... on Practice {
              id
              uri
              title
            }
          }
        }
      }
    }
  }
}
`;

export const getAllPractices = `{
  practices(first: 1000) {
    nodes {
      title
      slug
    }
  }
}`;

export const getPracticeBySlug = (slug) => `{
  practices(where: {name: "${slug}"}) {
    nodes {
      title
      slug
      practicePortalPageContent {
        practicePortalCategories
      }
      practicesIncluded {
        childPractice {
          ... on Practice {
            id
            title
            slug
            uri
          }
        }
        contentSection {
          content
          title
        }
        description
        includeAttorney {
          ... on AttorneyProfile {
            id
            title
            attorneyMainInformation {
              designation
              email
              phoneNumber
              lastName
            }
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
        highlightScroller {
          image {
            sourceUrl
          }
          title
        }
        includePractice {
          ... on Practice {
            id
            slug
            title
          }
        }
        relatedBlogCategory {
          posts(first: 100) {
            nodes {
              slug
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
          link
        }
        sectionChief {
          ... on AttorneyProfile {
            id
            title
            attorneyMainInformation {
              email
              designation
              phoneNumber
            }
            featuredImage {
              node {
                sourceUrl
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
  }
}`;
