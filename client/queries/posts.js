export const everyFirmInsightsPost = `{
  posts(where: {offsetPagination: {size: 10000, offset: 10000}, categoryId: 599}) {
    nodes {
      slug
      date
    }
  }
}`;

export const getListOfPostsByName = (slug) => `{
    posts(where: {categoryName: "${slug}"}, first: 10000) {
      nodes {
        uri
        title
        id
      }
    }
  }`;

export const getPostBySlug = (slug) => `{
  posts(where: {name: "${slug}"}) {
    nodes {
      uri
      title
      slug
      seo {
        title
        metaDesc
      }
      content
      author {
        node {
          name
          url
          email
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
      tags(first: 10) {
        nodes {
          uri
          name
        }
      }
      date
    }
  }
}
`;
