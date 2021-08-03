import Head from 'next/head';
import { NextSeo } from 'next-seo';
import {
  buildBusinessSchema,
  buildAttorneyProfileSchema,
} from 'utils/json-ld-schemas';

export default function AttorneyProfileHead({ seo }) {
  const { title, canonicalLink, metaDescription, image, designation, socialMediaLinks } = seo;
  return (
    <>
      <NextSeo
        title={title}
        description={metaDescription}
        canonical={`https://scarincihollenbeck.com/${canonicalLink}`}
        openGraph={{
          url: `https://scarincihollenbeck.com/${canonicalLink}}`,
          title: 'Scarinci Hollenbeck',
          description: metaDescription,
          images: [
            {
              url: image,
              width: 743,
              height: 795,
              alt: title,
            },
          ],
          site_name: 'Scarinci Hollenbeck',
        }}
        twitter={{
          handle: '@S_H_Law',
          site: `https://scarincihollenbeck.com/${canonicalLink}}`,
          cardType: metaDescription,
        }}
      />
      <Head>
        <script
          key="ScarinciHollenbeck"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildBusinessSchema()),
          }}
        />
        <script
          key="ScarinciHollenbeck Bio Profile"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildAttorneyProfileSchema(
                title,
                `https://scarincihollenbeck.com/${canonicalLink}}`,
                image,
                socialMediaLinks,
                designation,
              ),
            ),
          }}
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
    </>
  )
}