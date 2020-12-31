export const getArchivesPosts = (query, offset) => {
  const modOffset = parseInt(offset, 10) * 10;
  return `{
    posts(where: {categoryName: "${query}", offsetPagination: {offset: ${modOffset}, size: 10}}) {
      edges {
        node {
          id
          title
          date
          uri
          excerpt
          
        }
      }
      pageInfo {
        offsetPagination {
          total
        }
      }
    }
  }`;
};
