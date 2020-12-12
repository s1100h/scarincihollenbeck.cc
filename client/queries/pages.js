export const getPageContents = (slug) => `{
    pages(where: {name: "${slug}"}) {
      nodes {
        title
        uri
        content
        seo {
          metaDesc
          title
        }
      }
    }
  }
  `;
