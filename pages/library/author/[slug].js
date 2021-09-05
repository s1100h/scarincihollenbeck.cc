import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';
import LibraryLayout from 'layouts/library-layout';
import SingleSubHeader from 'layouts/single-sub-header';
import { SITE_URL } from 'utils/constants';
import { getAuthorPaths, getAuthorContent } from 'utils/queries';

export default function LibraryAuthor({
  results,
  authors,
  popularCategories,
  childrenOfCurrentCategory,
  slug,
  authorName,
  authorDescription,
  topicOne,
  topicTwo,
  topicThree,
}) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    );
  }

  const canonicalUrl = `${SITE_URL}/library/author/${slug}`;

  return (
    <>
      <NextSeo
        title={`Legal Blog Articles by ${authorName}`}
        description={`${authorName} is a ${topicOne} attorney who writes articles on ${topicOne}, ${topicTwo}, and ${topicThree}.`}
        canonical={canonicalUrl}
      />
      <SingleSubHeader span={8} offset={1} title={authorName} subtitle={authorDescription} />
      <LibraryLayout
        results={results}
        authors={authors}
        popularCategories={popularCategories}
        childrenOfCurrentCategory={childrenOfCurrentCategory}
        pageTitle={authorName}
      />
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getAuthorPaths();

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  // eslint-disable-next-line quotes
  let tempStr = ``;
  // eslint-disable-next-line quotes
  const tempChildCat = ``;

  if (slug) {
    tempStr += `offset=1&author=${slug}`;
  }

  const [results, authors, childrenOfCurrentCategory, popularCategories, authorBio] = await getAuthorContent(tempStr, tempChildCat, slug);

  if (authorBio.bio[0].name.length <= 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      query: tempStr.replace('offset=1&', ''),
      results: results || [],
      authors: authors || [],
      popularCategories: popularCategories || [],
      childrenOfCurrentCategory: childrenOfCurrentCategory || [],
      authorName: authorBio.bio[0].name,
      authorDescription: authorBio.bio[0].bioContent,
      slug,
      topicOne: authorBio.practices[0].title.toLowerCase(),
      topicTwo: authorBio.practices[1].title.toLowerCase(),
      topicThree: authorBio.practices[2]
        ? authorBio.practices[2].title.toLowerCase()
        : 'public law',
    },
    revalidate: 10,
  };
}
