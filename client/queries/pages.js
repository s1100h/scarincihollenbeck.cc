export const getPageContents = (slug) => `{
    pages(where: {name: "${slug}"}) {
      nodes {
        title
        uri
        content
        seo {
          metaDesc
          title
        }
      }
    }
  }
`;

export const getFirmPage = (slug) => `{
    pages(where: {name: "${slug}"}) {
      nodes {
        id
        title
        uri
        seo {
          metaDesc
          title
        }
        FirmPagesContentDescription {
          description
        }
        FirmPagesContentTabs {
          tab2Content
          tab2Header
          tab3Content
          tab4Content
          tab3Header
          tab4Header
          tab5Content
          tab5Header
          tabContent
          tabHeader
        }
      }
    }
  }`;
