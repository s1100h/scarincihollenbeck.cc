export const getSingleCareer = (slug) => `{
    careers(where: {name: "${slug}"}) {
      nodes {
        uri
        title
        seo {
          metaDesc
          title
        }
        careerFields {
          additionalDetails
          contact
          duration
          position
          positionDescription
          positionLocation
          positionType
          startDate
        }
        slug
      }
    }
  }
  `;

export const getAllCareers = ` {
  careers {
    nodes {
      title
      slug
      careerFields {
        startDate
        positionType
        positionLocation
      }
      seo {
        metaDesc
        title
        canonical
      }
    }
  }
}
`;
