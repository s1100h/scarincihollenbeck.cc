export const getPostsByAuthor = (author, offset) => {
  const modOffset = parseInt(offset, 10) * 10
  return `{
    posts(where: {authorName: "${author}", offsetPagination: {offset: ${modOffset}, size: 10000}}) {
      edges {
        node {
          id
          title
          date
          uri
        }
      }
    }
  }`
}


export const getAuthorBio = (author) => {
  const modAuthor = author.slice(1)

  if(author === "scarincihollenbeck") {
    return {
      data: {
        attorneyProfiles: {
          nodes: [
            {
              title: "Scarinci Hollenbeck",
              bioContent: "With a growing practice of more than 60 experienced attorneys, Scarinci Hollenbeck is an alternative to a National 250 law firm.",
              link: "/",
              image: "/images/no-image-found-diamond.png",
              email: "info@sh-law.com",
              phone: "201-896-4100"
            }
          ]
        }
      }
    }
  }

  return `{
    attorneyProfiles(where: {search: "${modAuthor}"}) {
      nodes {
        title
        uri
        attorneyBiography {
          biographyContent
        }
        attorneyMainInformation {
          email
          phoneNumber
        }
      }
    }
  }`
}
