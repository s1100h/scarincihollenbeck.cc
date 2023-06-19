import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { CURRENT_DOMAIN } from 'utils/constants';
import { STANDARD_SCHEMA, buildAttorneyProfileSchema } from 'utils/json-ld-schemas';

const PersonSiteHead = ({
  title, metaDescription, canonicalUrl, name, featuredImage, designation, socialMediaLinks,
}) => {
  const router = useRouter();
  const slug = router.asPath;
  const currentUrl = CURRENT_DOMAIN + slug;
  const standardImage = `${CURRENT_DOMAIN}/images/no-image-found-diamond.png`;
  const standardSocial = [{ url: 'https://twitter.com/S_H_Law' }, { url: 'https://www.facebook.com/ScarinciHollenbeck/' }, { url: 'https://www.linkedin.com/company/scarinci-hollenbeck-llc/' }];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl || currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={featuredImage || standardImage} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: STANDARD_SCHEMA }} />
      <script
        key="ScarinciHollenbeck Bio Profile"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildAttorneyProfileSchema(title, canonicalUrl || currentUrl, featuredImage || standardImage, socialMediaLinks || standardSocial, designation)),
        }}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={featuredImage || standardImage} />
    </Head>
  );
};

export default PersonSiteHead;
