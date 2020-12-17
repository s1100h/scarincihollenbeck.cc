export const getCorePractices = `{
  searchWP(where: {input: "Core Practices"}) {
    nodes {
      ... on Practice {
        id
        title
        uri
      }
    }
  }
}
`