import Link from 'next/link';
import useSWR from 'swr';
import SubscriptionFormColumn from 'components/subscription-form-column';
import SiteLoader from 'components/site-loader';
import ErrorMessage from 'components/error-message';
import textStyles from 'styles/Text.module.css';
import styles from 'styles/Category.module.css';
import { sortByKey } from 'utils/helpers';

export default function CategoryLawFirmInsightsColumnContent({
  lawFirmInsightsCategoryChildren,
}) {
  //
  const {
    data: authorsPageOne,
    error: authorsPageOneErr,
  } = useSWR(
    'https://wp.scarincihollenbeck.com/wp-json/wp/v2/users?per_page=100&page=1',
    (url) => fetch(url).then((r) => r.json()),
  );

  if (authorsPageOneErr) return <ErrorMessage />;
  if (!authorsPageOne) return <SiteLoader />;

  const prunedAuthors = authorsPageOne.filter((author) => author.url !== '');

  const reFormatPrunedAuthorsWithLastname = prunedAuthors.map((pa) => {
    const splitName = pa.name.split(' ');
    return {
      id: pa.id,
      name: pa.name,
      link: pa.link,
      lastName: splitName[splitName.length - 1],
    };
  });

  const sortReFormatPruendAuthorsWithLastname = sortByKey(
    reFormatPrunedAuthorsWithLastname,
    'lastName',
  );

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-3 border-right">
          <h5 className={textStyles.redTitle}>
            <strong>More from our attorneys</strong>
          </h5>
          <hr />
          <ul className={`${styles.listOverflow} ml-3 mr-0 px-0`}>
            {sortReFormatPruendAuthorsWithLastname.map((post) => (
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
        <div className="col-sm-12 col-md-4 border-right">
          <h5 className={textStyles.redTitle}>
            <strong>More about our areas of law</strong>
          </h5>
          <hr />
          <ul className={`${styles.listOverflow} ml-3 mr-0 px-0`}>
            {lawFirmInsightsCategoryChildren.map((post) => (
              <li key={post.name} className={`${textStyles.blueTitle} mb-2`}>
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
