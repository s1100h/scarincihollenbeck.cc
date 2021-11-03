import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';
import LibraryPage from 'components/pages/library-page';
import { SITE_URL } from 'utils/constants';
import { getLibraryCategoryContent } from 'utils/queries';
import { getLibraryContent } from 'pages/api/library-content';

export default function LibraryCategory({
  authors,
  childrenOfCurrentCategory,
  description,
  name,
  pageTitle,
  popularCategories,
  results,
  categoryId,
}) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    );
  }

  const splitDescription = description.split('.');
  const modDescription = `${splitDescription[0]}. ${splitDescription[1]}.`;
  const currentPageTitle = pageTitle.replace(/-/g, ' ');
  const canonicalUrl = `${SITE_URL}/library/${pageTitle}`;
  const categoryName = name.replace('&amp;', '&');

  const libraryProps = {
    seo: {
      title: categoryName,
      metaDescription: modDescription,
      canonicalUrl,
    },
    results,
    authors,
    popularCategories,
    childrenOfCurrentCategory,
    categoryId,
    currentPageTitle,
    pageTitle: 'Article Library',
    pageSubTitle:
      'Scarinci Hollenbeck regularly publishes articles pertaining to legal updates affecting individuals and institutions in New York and New Jersey, and the world at large. Here you can find coverage for when we welcome new attorneys, significant wins we’ve secured on behalf of our clients, and general announcements.',
  };

  return <LibraryPage {...libraryProps} />;
}

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const request = await getLibraryContent(slug);

  if (request.status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...request.data,
    },
  };
}
