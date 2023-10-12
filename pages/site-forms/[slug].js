import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { BASE_API_URL } from 'utils/constants';
import SiteFormPage from 'components/pages/SiteFeedbackPage';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

/** Site Forms URLS  */
const SITE_FORM_SLUGS = ['new-attorney', 'current-attorney'];

/** Generate the urls so we can build static pages */

/** The addons of headers. */
const headers = {
  method: 'GET',
  headers: {
    'User-Agent':
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
    Accept: 'application/json; charset=UTF-8',
  },
};

export const getStaticPaths = () => {
  const urls = SITE_FORM_SLUGS.map((slug) => `/site-forms/${slug}`);

  return {
    paths: urls || [],
    fallback: 'blocking',
  };
};

/** Fetch the page data and map it to props */
export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;

  const isFormPage = SITE_FORM_SLUGS.includes(slug);

  if (!isFormPage) {
    return {
      notFound: true,
    };
  }

  const practiceRequest = await fetch(
    `${BASE_API_URL}/wp-json/wp/v2/practices?per_page=100`,
    headers,
  ).then((data) => data.json());
  const attorneyRequest = await fetch(
    `${BASE_API_URL}/wp-json/wp/v2/attorneys?per_page=100`,
    headers,
  ).then((data) => data.json());

  return {
    props: {
      isNewAttorney: params.slug.includes('new'),
      attorneys: attorneyRequest
        .map((attorney) => ({
          email: attorney.acf.email,
          name: attorney.title.rendered
            .replace(/&#8221;/g, '"')
            .replace(/&#8220;/g, '"'),
          link: attorney.link.replace('wp.', ''),
        }))
        .sort((a, b) => {
          if (a.name > b.name) return 1;
          return -1;
        }),
      practices: practiceRequest
        .map((practice) => practice.title.rendered
          .replace(/&#038;/g, '&')
          .replace(/&#8217;/g, "'"))
        .sort((a, b) => {
          if (a > b) return 1;
          return -1;
        }),
    },
  };
};

/** Forms to send out to new attorneys so they can add details they want in their bios */
const SiteForms = ({ attorneys, practices, isNewAttorney }) => {
  const [attorney, setAttorney] = useState('');
  const router = useRouter();
  if (router.isFallback) {
    return <SiteLoader />;
  }

  // set input form when attorney is not listed
  useEffect(() => {
    if (attorney === ' ') {
      setAttorney('');
    }
  }, [attorney]);

  const siteFormProps = {
    attorney,
    setAttorney,
    attorneys,
    practices,
    isNewAttorney,
  };

  return <SiteFormPage {...siteFormProps} />;
};

export default SiteForms;
