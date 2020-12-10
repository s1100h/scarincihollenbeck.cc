export everyFirmInsightsPost = ` {
  posts(where: {offsetPagination: {size: 10000, offset: 10000}, categoryId: 599}) {
    nodes {
      slug
      date
    }
  }
}`