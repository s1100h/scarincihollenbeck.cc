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

export const getAllCareers = `{
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

export const queryCareers = (query) => {
  const parsedQuery = JSON.parse(query);
  const input = Object.values(parsedQuery).join(', ')

  if (Object.keys(parsedQuery).length === 0) {
    return `{
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
  }

  return `{
    searchWP(where: {input: "${input}"}) {
      nodes {
        ... on Career {
          id
          title
          slug
          careerFields {
            startDate
            positionType
            positionLocation
          }
        }
      }
    }
  }`;
};
