import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import BasicPageContent from 'components/pages/BasicPageContent';
import { PRODUCTION_URL } from 'utils/constants';
import { fetchAPI } from 'utils/api';
import { basicPagesQuery } from 'utils/graphql-queries';
import { getSubTitleFromHTML } from 'utils/helpers';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

/** Fetch page data from WP GRAPHQL API */
const getBasicPageContent = async (slug) => {
  const data = await fetchAPI(basicPagesQuery, {
    variables: { slug },
  });
  return data?.pageBy;
};

/** Set data from API response to page props */
export const getServerSideProps = async ({ params }) => {
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
    title, content, seo, addFormToPage,
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
    },
  };
};

/** Basic page component - Awards, Privacy Policy, Work Life Balance etc. */
const BasicPage = ({
  content, seo, slug, title, pageForm,
}) => {
  const router = useRouter();
  if (router.isFallback) {
    return <SiteLoader />;
  }

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
  };
  return <BasicPageContent {...basicPageProps} />;
};

export default BasicPage;
