import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import FormPageContent from 'components/pages/FormPageContent';
import SiteLoader from 'components/shared/SiteLoader';
import { SITE_URL } from 'utils/constants';
import { fetchAPI } from 'utils/api';
import { contactSubscribePageQuery } from 'utils/graphql-queries';
import { LocationContext } from 'contexts/LocationContext';
import { getLocationContent } from 'utils/queries';

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
  const modUrls = formPages.map((url) => `/form-page/${url}`);

  return {
    paths: modUrls || [],
    fallback: 'blocking',
  };
};

/** Set form page data to props */
export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const request = await contactSubscribePage(slug);
  let offices = [];

  if (slug.includes('contact')) {
    const [locations] = await getLocationContent('lyndhurst');
    const officesMod = locations.offices.map(({
      id, title, address, phone, fax, slug,
    }) => ({
      id,
      title,
      address,
      phone,
      fax,
      slug,
    }));
    offices = [...officesMod];
  }
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
      offices: offices.length > 0 ? offices : null,
    },
  };
};

/** Form Pages - contact, subscribe page */
const FormPage = ({
  title, seo, content, formLabel, slug, offices,
}) => {
  const router = useRouter();
  const { locations, setLocations } = useContext(LocationContext);

  if (router.isFallback) {
    return <SiteLoader />;
  }
  /** set offices context */
  useEffect(() => {
    if (offices && !locations) {
      setLocations(offices);
    }
  }, [offices]);

  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');
  const canonicalUrl = `${SITE_URL}/${slug}`;
  const isSubscribe = slug.includes('subscribe');

  const formProps = {
    isSubscribe,
    bodyContent,
    canonicalUrl,
    seo,
    site: {
      title,
      description: subTitle,
      formLabel,
    },
  };

  return <FormPageContent {...formProps} />;
};

export default FormPage;
