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
      <PostSocialShareSidebar title={title} />
      <SubscriptionMessage />      
      <TrendingStories title="Trending Stories" content={posts} />
      {attorneys.length > 0 && (
        <div className="w-100 mt-4">
          <p className={fontStyles.ft12rem}>
            <strong>Mentioned Attorneys</strong>
          </p>
          <ul>
            {attorneys.map((a) => (
              <li key={a.name} className="list-unstyled">
                <Link href={a.link}>
                  <a className="text-dark">{a.name}</a>
                </Link>
                {a.designation && (
                  <div className="my-0 py-0 d-block">
                    <small>
                      <strong>Title: </strong>
                      {' '}
                      {a.designation}
                    </small>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <style jsx>
            {`
              ul {
                margin-left: -2.48em;
                margin-top: -10px;
              }

              ul li {
                margin-bottom: 6px;
                padding-bottom: 10px;
                padding-top: 10px;
                line-height: 1.4;
                color: #444;
              }
              ul li:not(:last-child) {
                border-bottom: 0.5px solid #e9e9e9;
              }
            `}
          </style>
        </div>
      )}
    </div>
  );
}
