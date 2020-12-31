/* eslint-disable arrow-body-style */
export const getAllCategories = `{
  categories(first: 10000) {
    nodes {
      uri
      name
    }
  }
}`;

export const getChildrenCategoriesFromSlug = (slug) => {
  return `{
    categories(where: {slug: "${slug}"}) {
      nodes {
        uri
        name
        children {
          nodes {
            id
            name
            uri
          }
        }
      }
    }
  }`;
};

export const getFirst14PostsFromSlug = (slug) => {
  return `{
    categories(where: {slug: "${slug}"}) {
      nodes {
        uri
        name
        description
        posts(first: 14) {
          edges {
            node {
              id
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }
              link
              uri
              excerpt
              author {
                node {
                  name
                  url
                }
              }
              categories {
                nodes {
                  name
                  uri
                }
              }
            }
          }
        }
        seo {
          title
          metaDesc
        }
        children(first: 30) {
          nodes {
            name
            link
            uri
            posts(first: 6) {
              nodes {
                title
                slug
                link
                uri
                id
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
    }
  }
  `;
};
