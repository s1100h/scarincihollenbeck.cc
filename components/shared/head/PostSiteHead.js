import Head from 'next/head';
import { useRouter } from 'next/router';
import { ArticleJsonLd } from 'next-seo';
import { CURRENT_DOMAIN } from 'utils/constants';
import { STANDARD_SCHEMA } from 'utils/json-ld-schemas';

const PostSiteHead = ({ seo, post, authors }) => {
  const { metaTitle, metaDescription } = seo;
  const router = useRouter();
  const slug = router.asPath;

  const canonicalUrl = CURRENT_DOMAIN + slug;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${CURRENT_DOMAIN}/images/no-image-found-diamond.png`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={metaTitle} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: STANDARD_SCHEMA }} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content={`${CURRENT_DOMAIN}/images/no-image-found-diamond.png`}
        />
      </Head>
      <ArticleJsonLd
        url={canonicalUrl}
        title={metaTitle}
        images={[post.featuredImage]}
        datePublished={post.date}
        dateModified={post.date}
        authorName={authors.map((author) => author.display_name)}
        publisherName="Scarinci Hollenbeck, LLC"
        publisherLogo={`${CURRENT_DOMAIN}/images/no-image-found-diamond.png`}
        description={metaDescription}
      />
    </>
  );
};

export default PostSiteHead;
