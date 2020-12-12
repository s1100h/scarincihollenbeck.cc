import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import Search from 'components/search';
import LargeSidebar from 'layouts/large-sidebar';
import TrendingStories from 'components/non-graphql-trending-stories';
import SubscriptionBody from 'components/subscription-body';
import { headers } from 'utils/helpers';

export default function SubscriptionPage({ seo, posts }) {
  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical={`http://scarincihollenbeck.com/${seo.canonicalLink}`}
      />
      <LargeSidebar
        body={<SubscriptionBody />}
        sidebar={(
          <div>
            <Search />
            <TrendingStories
              title="Latest From Firm Insights"
              content={posts}
            />
          </div>
        )}
      />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const [json] = await Promise.all([
    fetch(
      `${process.env.REACT_APP_WP_BACKEND}/wp-json/category/posts/law-firm-insights`,
      { headers },
    ).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, {
      headers,
    }).then((data) => data.json()),
  ]);
  const { main, latest, archives } = json;
  const firstTwoArchives = archives.filter((a, i) => i <= 1 && a);
  const posts = [...main, ...latest, ...firstTwoArchives];
  const seo = {
    title: 'Subscribe To Firm Mailing List | Scarinci Hollenbeck',
    metaDescription:
      "Sign up now and get access to Scarinci Hollenbeck attorney's articles on cutting edge legal topics, their press releases, and firm announcements.",
    canonical: '/subscribe',
  };

  return {
    props: {
      seo,
      posts,
    },
  };
}
