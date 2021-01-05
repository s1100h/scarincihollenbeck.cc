import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import Search from 'components/search';
import LargeSidebar from 'layouts/large-sidebar';
import TrendingStories from 'components/non-graphql-trending-stories';
import SubscriptionBody from 'components/subscription-body';
import { headers } from 'utils/helpers';

export default function SubscriptionPage({ posts }) {
  return (
    <>
      <NextSeo
        title="Subscribe To Firm Mailing List | Scarinci Hollenbeck"
        description="Sign up now and get access to Scarinci Hollenbeck attorney's articles on cutting edge legal topics, their press releases, and firm announcements."
        canonical="http://scarincihollenbeck.com/subscribe"
      />
      <LargeSidebar
        body={<SubscriptionBody />}
        sidebar={(
          <div>
            <Search />
            <TrendingStories title="Latest From The Firm" content={posts} />
          </div>
        )}
      />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const [json] = await Promise.all([
    fetch('https://wp.scarincihollenbeck.com/wp-json/category/posts/law-firm-insights', { headers }).then((data) => data.json()),
  ]);
  const { main, latest, archives } = json;
  const firstTwoArchives = archives.filter((a, i) => (i <= 1) && a);

  const posts = [].concat(main, latest, firstTwoArchives);

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}
