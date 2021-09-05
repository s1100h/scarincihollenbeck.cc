import Link from 'next/link';
import TrendingStories from 'components/shared/trending-stories';
import SubscriptionMessage from 'components/molecules/subscription/subscription-message';
import SimpleSearch from 'components/molecules/simple-search';
import PostSocialShareSidebar from 'components/organisms/post/social-share-sidebar';
import fontStyles from 'styles/Fonts.module.css';

export default function PostSidebar({ title, posts, attorneys }) {
  return (
    <div className="d-print-none">
      <SimpleSearch />
      <hr />
      <PostSocialShareSidebar title={title} />
      <hr />
      <SubscriptionMessage />
      <hr />
      {posts.length > 0 && <TrendingStories title="Trending Stories" content={posts} />}
      {attorneys.length > 0 && (
        <div className="w-100 mt-4">
          <hr />
          <p className={fontStyles.ft12rem}>
            <strong>Mentioned Attorneys</strong>
          </p>
          <ul>
            {attorneys.length > 0
              && attorneys.map((a) => (
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
