import Link from 'next/link';
import useSWR from 'swr';
import { request } from 'graphql-request';
import SubscriptionFormColumn from 'components/subscription-form-column';
import SiteLoader from 'components/site-loader';
import ErrorMessage from 'components/error-message';
import textStyles from 'styles/Text.module.css';
import { getPracticesByInput } from 'queries/practices';
import { getChildrenCategoriesFromSlug } from 'queries/category';
import { sortByKey } from 'utils/helpers';

export default function CategoryColumnContent() {
  const {
    data: corePractices,
    error: corePracticesError,
  } = useSWR(getPracticesByInput('Core Practices'), (query) => request('https://wp.scarincihollenbeck.com/graphql', query));

  const {
    data: lawFirmInsightsChildren,
    error: lawFirmInsightsChildrenError,
  } = useSWR(getChildrenCategoriesFromSlug('law-firm-insights'), (query) => request('https://wp.scarincihollenbeck.com/graphql', query));

  if (corePracticesError || lawFirmInsightsChildrenError) return <ErrorMessage />;
  if (!corePractices || !lawFirmInsightsChildren) return <SiteLoader />;

  const sortedCorePractices = sortByKey(corePractices.searchWP.nodes.filter(
    (value) => JSON.stringify(value) !== '{}',
  ), 'title');
  const sortedlawFirmInsightsChildren = sortByKey(
    lawFirmInsightsChildren.categories.nodes[0].children.nodes.filter(
      (value) => JSON.stringify(value) !== '{}',
    ),
    'title',
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
            {sortedCorePractices.map((post) => (
              <li key={post.id} className={`${textStyles.blueTitle} mb-2`}>
                <Link href={post.uri}>
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
            {sortedlawFirmInsightsChildren.map((post) => (
              <li key={post.id} className={`${textStyles.blueTitle} mb-2`}>
                <Link href={post.uri}>
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
