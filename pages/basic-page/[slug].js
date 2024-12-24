import BasicPageContent from 'components/pages/BasicPageContent';
import { PRODUCTION_URL } from 'utils/constants';
import { fetchAPI } from 'requests/api';
import { basicPagesQuery } from 'requests/graphql-queries';
import { getSubTitleFromHTML } from 'utils/helpers';

/** Fetch page data from WP GRAPHQL API */
const getBasicPageContent = async (slug) => {
  const data = await fetchAPI(basicPagesQuery, {
    variables: { slug },
  });
  return data?.pageBy;
};

export async function getStaticPaths() {
  const pages = [
    'awards',
    'terms-of-use',
    'privacy-policy',
    'disclaimer',
    'work-life-balance',
  ];
  const paths = pages.map((url) => `/basic-page/${url}`);

  return {
    paths,
    fallback: 'blocking',
  };
}

/** Set data from API response to page props */
export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const request = await getBasicPageContent(slug);

  if (!request) {
    return {
      notFound: true,
    };
  }

  const {
    title, content, seo, addFormToPage, featuredImage,
  } = request;

  return {
    props: {
      title,
      content,
      seo,
      pageForm: {
        enableForm: addFormToPage?.enableForm,
        formLabel: addFormToPage?.formLabel,
      },
      slug: params.slug,
      subHeaderImage: featuredImage.node.sourceUrl,
    },
    revalidate: 86400,
  };
};

/** Basic page component - Awards, Privacy Policy, Work Life Balance etc. */
const BasicPage = ({
  content, seo, slug, title, pageForm, subHeaderImage,
}) => {
  const { clearBody, subTitle } = getSubTitleFromHTML(content);
  const canonicalUrl = `${PRODUCTION_URL}/${slug}`;

  const basicPageProps = {
    bodyContent: clearBody,
    canonicalUrl,
    seo,
    pageForm,
    site: {
      title,
      description: subTitle,
    },
    subHeaderImage,
  };
  return <BasicPageContent {...basicPageProps} />;
};

export default BasicPage;
