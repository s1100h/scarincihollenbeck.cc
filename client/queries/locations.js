export const allLocations = `{
  officeLocations {
    nodes {
      uri
      title
    }
  }
}
`

export const getLocationByName = slug => {
  return `{
    officeLocations(where: {name: "${slug}"}) {
      nodes {
        uri
        title
        officeMainInformation {
          addressCountry
          addressLocality
          fax
          addressRegion
          floor
          latitude
          longitude
          mapLink
          officeBuildingTitle
          officePractices {
            ... on Practice {
              id
              link
              title
            }
          }
          phone
          poBox
          postCode
          streetAddress
        }
        seo {
          title
          metaDesc
        }
      }
    }
  }
  `
}