import Link from 'next/link';
import TrendingStories from 'components/non-graphql-trending-stories';
import SubscriptionMessage from 'components/subscription-message';
import SimpleSearch from 'components/simple-search';
import PostSocialShareSidebar from 'components/post/social-share-sidebar';
import fontStyles from 'styles/Fonts.module.css';

export default function PostSidebar({ title, posts, attorneys }) {
  return (
    <div className="d-print-none">
      <SimpleSearch />
      <SubscriptionMessage />
      <PostSocialShareSidebar title={title} />
      <TrendingStories title="Trending Stories" content={posts} />
      {attorneys.length > 0 && (
        <div className="w-100 mt-4">
          <p className={fontStyles.ft12rem}>
            <strong>Mentioned Attorneys</strong>
          </p>
          <ul className="list-unstyled px-1 mx-1">
            {attorneys.map((a) => (
              <li key={a.name} className="py-3">
                <Link href={a.link}>
                  <a className="m-attorneys d-flex flex-row text-dark">
                    <p className="mb-0">
                      <strong>{a.name}</strong>
                    </p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
