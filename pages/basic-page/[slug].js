import { useRouter } from 'next/router';
import BasicPageContent from 'components/pages/BasicPageContent';
import SiteLoader from 'components/shared/site-loader';
import { SITE_URL } from 'utils/constants';
// import { getPageContent, getCurrentPublishedPages } from 'utils/queries';
import { getBasicPageContent } from 'utils/api';

export default function BasicPage({
  content, seo, slug, title, pageForm,
}) {
  const router = useRouter();
  if (router.isFallback) {
    return <SiteLoader />;
  }

  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');
  const canonicalUrl = `${SITE_URL}/${slug}`;

  const basicPageProps = {
    bodyContent,
    canonicalUrl,
    seo,
    pageForm,
    site: {
      title,
      description: subTitle,
    },
  };
  return <BasicPageContent {...basicPageProps} />;
}

// export async function getStaticPaths() {
//   const requestUrls = await getCurrentPublishedPages();
//   const pruneUrls = requestUrls.filter((url) => {
//     if (
//       url.includes('passing')
//       || url.includes('covid')
//       || url.includes('firm-overview')
//       || url.includes('subscribe')
//       || url.includes('contact')
//       || url.includes('holidays')
//       || url.includes('front-page')
//       || url.includes('women-lead')
//       || url.includes('community-involvement')
//       || url.includes('diversity')
//       || url.includes('pro-bono')
//       || url.includes('practices')
//       || url.includes('attorneys')
//       || url.includes('careers')
//       || url.includes('administration')
//     ) {
//       return false;
//     }

//     return true;
//   });

//   const modUrls = pruneUrls.map((url) => `/basic-page/${url}`);

//   return {
//     paths: modUrls || [],
//     fallback: 'blocking',
//   };
// }

export async function getServerSideProps({ params }) {
  const request = await getBasicPageContent(params.slug);

  const {
    title, content, seo, AddContactFormToPage,
  } = request;

  return {
    props: {
      title,
      content,
      seo,
      pageForm: {
        enableForm: AddContactFormToPage.enableForm,
        formLabel: AddContactFormToPage.formLabel,
      },
      slug: params.slug,
    },
  };
}
