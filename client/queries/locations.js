export const allLocations = `{
  officeLocations {
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
        phone
        poBox
        postCode
        streetAddress
      }
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
              uri
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