import Link from 'next/link';
import useSWR from 'swr';
import SubscriptionFormColumn from 'components/subscription-form-column';
import SiteLoader from 'components/site-loader';
import ErrorMessage from 'components/error-message';
import textStyles from 'styles/Text.module.css';
import { sortByKey } from 'utils/helpers';

export default function CategoryColumnContent() {
  const {
    data: practices,
    error: practicesError,
  } = useSWR(
    'https://wp.scarincihollenbeck.com/wp-json/practice-portal/page',
    (url) => fetch(url).then((r) => r.json()),
  );

  const {
    data: lawFirmInsightsChildren,
    error: lawFirmInsightsChildrenError,
  } = useSWR(
    'https://wp.scarincihollenbeck.com/wp-json/category/firm-insights-children',
    (url) => fetch(url).then((r) => r.json()),
  );

  if (practicesError || lawFirmInsightsChildrenError) return <ErrorMessage />;
  if (!practices || !lawFirmInsightsChildren) return <SiteLoader />;

  const corePractices = practices.practices.filter(
    (practice) => practice.category === 'Core Practices',
  );

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-3 border-right">
          <h5 className={textStyles.redTitle}>
            <strong>Core Practices</strong>
          </h5>
          <hr />
          <ul className="ml-3 mr-0 px-0">
            {sortByKey(corePractices, 'title').map((post) => (
              <li key={post.ID} className={`${textStyles.blueTitle} mb-2`}>
                <Link href={post.slug}>
                  <a className={`${textStyles.blueTitle}`}>
                    <strong>{post.title}</strong>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-sm-12 col-md-4 border-right">
          <h5 className={textStyles.redTitle}>
            <strong>Firm Insight&apos;s Categories</strong>
          </h5>
          <hr />
          <ul className="ml-3 mr-0 px-0">
            {lawFirmInsightsChildren.map((post) => (
              <li key={post.id} className={`${textStyles.blueTitle} mb-2`}>
                <Link href={post.link}>
                  <a className={`${textStyles.blueTitle}`}>
                    <strong>{post.name}</strong>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-sm-12 col-md-5">
          <h5 className={textStyles.redTitle}>
            <strong>Join our mailing list!</strong>
          </h5>
          <hr />
          <div className="ModalForm-main">
            <p className="text-center text-muted small-excerpt mb-2">
              Enter your email and select a category(s) below.
            </p>
            <SubscriptionFormColumn />
          </div>
        </div>
      </div>
    </div>
  );
}
