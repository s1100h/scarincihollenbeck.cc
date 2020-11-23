export const allAdministraionQuery = `{
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
            sourceUrl
          }
        }
      }
    }
  }
}`


export const adminPageMetaDataQuery = `{

}`


export const singleAdministraion = id => {
  return `{

  }`
}