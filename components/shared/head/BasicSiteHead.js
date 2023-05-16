import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { CURRENT_DOMAIN } from 'utils/constants';
import { buildPersonSchema, STANDARD_SCHEMA } from 'utils/json-ld-schemas';
import { createMarkup } from '../../../utils/helpers';

const renderSchema = (routerSlug, personsSchema) => {
  const schemaMap = {
    '/location/[slug]': buildPersonSchema(personsSchema),
    '/practices/[slug]': buildPersonSchema(personsSchema),
  };

  return schemaMap[routerSlug];
};

const BasicSiteHead = ({
  title, metaDescription, canonicalUrl, personDataForSchema,
}) => {
  const router = useRouter();
  const slug = router.asPath;
  const currentUrl = CURRENT_DOMAIN + slug;

  return (
    <Head>
      <title>{title}</title>
      {/* Google Tag Manager */}
      <script
        id="gtm-script"
        async
        dangerouslySetInnerHTML={createMarkup(
          `
              (function(w,d,s,l,i){
                w[l] = w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l='+l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              }
              )(window, document, 'script', 'dataLayer', 'GTM-PC64FQH');
          `,
        )}
      />
      {/* End Google Tag Manager */}
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl || currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={`${CURRENT_DOMAIN}/images/no-image-found-diamond.png`} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: STANDARD_SCHEMA }} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${CURRENT_DOMAIN}/images/no-image-found-diamond.png`} />
      <script
        key="ScarinciHollenbeck Bio Profile"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(renderSchema(router.route, personDataForSchema)),
        }}
      />
    </Head>
  );
};

export default BasicSiteHead;
