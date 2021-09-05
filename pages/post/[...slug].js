import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { getPostContent } from 'pages/api/get-post-content';
import { BASE_API_URL, SITE_URL } from 'utils/constants';
import SiteLoader from 'components/shared/site-loader';
import PostPage from 'components/pages/post-page';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function LawFirmInsightsPost({
  post,
  seo,
  categories,
  tags,
  authors,
  category,
  postUrl,
}) {
  const router = useRouter();
  const [relatedAttorneys, setRelatedAttorneys] = useState([]);
  const [trendingStories, setTrendingStories] = useState([]);
  const [eventDetails, setEventDetails] = useState([]);
  const [isEvent, setIsEvent] = useState(false);
  const [isError, setIsError] = useState(false);
  const url = `${BASE_API_URL}/wp-json/single/post/${postUrl}/${category}`;
  const { data, error } = useSWR(url, fetcher);

  const canonicalUrl = `${SITE_URL}${router.asPath}`;
  const metaAuthorLinks = authors.map((author) => (author.display_name === 'Scarinci Hollenbeck' ? SITE_URL : author.user_url));

  if (router.isFallback) {
    return <SiteLoader />;
  }

  /**
   *  Related attorneys, Event Details, Trending Stories, Related Posts
   *  ;
   */
  useEffect(() => {
    if (data) {
      setTrendingStories(data.posts);
      setRelatedAttorneys(data.attorneys);

      if (data.eventDetails.length > 0) {
        setIsEvent(true);
        setEventDetails(data.eventDetails);
      }
    }

    if (error) {
      setIsError(true);
      console.error(error);
    }
  }, [data, error]);

  const postProps = {
    post,
    seo,
    categories,
    tags,
    canonicalUrl,
    metaAuthorLinks,
    relatedAttorneys,
    eventDetails,
    isEvent,
    trendingStories,
    authors,
    isError,
  };

  return <PostPage {...postProps} />;
}

export async function getServerSideProps({ params, res, query }) {
  const postUrl = params.slug[params.slug.length - 1];
  const { category } = query;
  const request = await getPostContent(postUrl, category);

  if (request.status === 404) {
    res.statusCode = 404;
    return {
      notFound: true,
    };
  }

  const {
    post, seo, categories, tags, authors,
  } = request;

  return {
    props: {
      post,
      seo,
      categories,
      tags,
      authors,
      category,
      postUrl,
    },
  };
}
