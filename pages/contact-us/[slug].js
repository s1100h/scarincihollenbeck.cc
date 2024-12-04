import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import FormPageContent from 'components/pages/FormPageContent';
import { PRODUCTION_URL } from 'utils/constants';
import { fetchAPI, fetchRestAPI } from 'requests/api';
import { contactSubscribePageQuery } from 'requests/graphql-queries';
import { getSubTitleFromHTML } from 'utils/helpers';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

/** contact/subscribe page content WP GRAPHQL query */
const contactSubscribePage = async (slug) => {
  const data = await fetchAPI(contactSubscribePageQuery, {
    variables: { slug },
  });
  return data?.pageBy;
};

/** Create urls for form pages for building static pages */
export const getStaticPaths = () => {
  const formPages = ['contact', 'subscribe'];
  const modUrls = formPages.map((url) => `/contact-us/${url}`);

  return {
    paths: modUrls || [],
    fallback: 'blocking',
  };
};

/** Set form page data to props */
export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const request = await contactSubscribePage(slug);
  const { locations } = await fetchRestAPI('locations');

  const {
    seo, title, formPages, content,
  } = request;

  return {
    props: {
      title,
      content,
      seo,
      formLabel: formPages?.formLabel || '',
      slug,
      offices: locations.length > 0 ? locations : null,
    },
  };
};

/** Form Pages - contact, subscribe page */
const FormPage = ({
  title, seo, content, formLabel, slug, offices,
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <SiteLoader />;
  }

  const { clearBody, subTitle } = getSubTitleFromHTML(content);
  const canonicalUrl = `${PRODUCTION_URL}/${slug}`;
  const isSubscribe = slug.includes('subscribe');

  const formProps = {
    isSubscribe,
    bodyContent: clearBody,
    canonicalUrl,
    seo,
    offices,
    site: {
      title,
      description: subTitle,
      formLabel,
    },
  };

  return <FormPageContent {...formProps} />;
};

export default FormPage;
