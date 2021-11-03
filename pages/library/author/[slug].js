import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';
import LibraryPage from 'components/pages/library-page';
import { SITE_URL, BASE_API_URL } from 'utils/constants';
import { getAuthorContent } from 'pages/api/author-posts';

export default function LibraryAuthor({
  authorId,
  authors,
  description,
  fullName,
  popularCategories,
  profileUrl,
  relatedCategories,
  results,
  seo,
  slug,
}) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    );
  }

  const canonicalUrl = `${SITE_URL}/library/author${slug}`;
  const { title, metaDescription } = seo;
  const archiveUrl = `${BASE_API_URL}/wp-json/wp/v2/posts/?author=${authorId}`;

  const authorProps = {
    seo: {
      title,
      metaDescription,
      canonicalUrl,
    },
    results,
    authors,
    popularCategories,
    childrenOfCurrentCategory: relatedCategories,
    categoryId: authorId,
    currentPageTitle: title,
    categoryName: title,
    description,
    archiveUrl,
    profileUrl,
  };

  return <LibraryPage {...authorProps} />;
}

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const request = await getAuthorContent(slug);

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
