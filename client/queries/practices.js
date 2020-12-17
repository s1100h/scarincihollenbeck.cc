export const getPracticesByInput = input => `{
  searchWP(where: {input: "${input}"}) {
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