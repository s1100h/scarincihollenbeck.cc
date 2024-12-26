import BasicPageContent from 'components/pages/BasicPageContent';
import { PRODUCTION_URL } from 'utils/constants';
import { fetchAPI } from 'requests/api';
import { basicPagesQuery } from 'requests/graphql-queries';

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
    title, seo, featuredImage, pagesFields,
  } = request;

  return {
    props: {
      title,
      seo,
      slug: params.slug,
      subHeaderImage: featuredImage?.node.sourceUrl,
      pagesFields,
    },
    revalidate: 86400,
  };
};

/** Basic page component - Awards, Privacy Policy, Work Life Balance etc. */
const BasicPage = ({
  seo, slug, title, subHeaderImage, pagesFields,
}) => {
  const { description, sections } = pagesFields;
  const canonicalUrl = `${PRODUCTION_URL}/${slug}`;

  const basicPageProps = {
    sections,
    canonicalUrl,
    seo,
    site: {
      title,
      description,
    },
    subHeaderImage,
  };
  return <BasicPageContent {...basicPageProps} />;
};

export default BasicPage;
