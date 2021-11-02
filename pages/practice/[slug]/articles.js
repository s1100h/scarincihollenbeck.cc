import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';
import { SITE_URL, CORE_PRACTICES } from 'utils/constants';
import { getPracticeContent } from 'pages/api/practice-content';
import { getPracticePosts } from 'utils/queries';
import PracticePage from 'components/pages/practice-page';

export default function PracticeSingleArticles({
  corePractices,
  practice,
  practiceChildren,
  type,
  slug,
}) {
  const [posts, setPosts] = useState([]);
  const [articleLoading, setArticleLoading] = useState(false);
  const router = useRouter();
  const practiceUrl = router.asPath.replace('/practices/', '').replace('/practice/', '');
  const canoncialUrl = `${SITE_URL}/practice/${practice.slug}`;

  if (router.isFallback) {
    return <SiteLoader />;
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const request = await getPracticePosts(slug, practice.blogId);
      setArticleLoading(false);
      setPosts(request);
    };

    setArticleLoading(true);
    if (posts.length <= 0) {
      fetchPosts();
    }
  }, [slug, practice]);

  const body = {
    title: 'Related Articles',
    content: posts,
  };

  const practiceProps = {
    corePractices,
    practice,
    practiceChildren,
    practiceUrl,
    canoncialUrl,
    body,
    slug,
    type,
    articleLoading,
  };

  return <PracticePage {...practiceProps} />;
}

export async function getServerSideProps({ params }) {
  const request = await getPracticeContent(params.slug);

  if (request.status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      practice: request.data,
      practiceChildren: request.data.children || [],
      corePractices: CORE_PRACTICES,
      type: 'articles',
      slug: params.slug,
    },
  };
}
