export const searchAllPosts = (query, offset) => {
  const modOffset = parseInt(offset, 10) * 10;
  const graphQLQuery =`{
    posts(where: {search: "${query.trim()}", offsetPagination: {offset: ${modOffset}, size: 10}}) {
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

  console.log(graphQLQuery);
  return graphQLQuery;
};