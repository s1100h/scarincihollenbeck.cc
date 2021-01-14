import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import textStyles from 'styles/Text.module.css';
import { makeTitle } from 'utils/helpers';

export default function PostBreadCrumbs() {
  const router = useRouter();
  console.log(router);
  const crumbs = router.asPath.split('/').filter((crumb) => crumb !== '');
  console.log('secondCrumb', crumbs[0]);

  return (
    <ul className="list-inline">
      <li className="list-inline-item">
        <Link href="/">
          <a className={`${textStyles.redTitle} text-uppercase`}>
            <strong>
              Home
              {' '}
              <FontAwesomeIcon icon={faCaretRight} />
            </strong>
          </a>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link href={`/${crumbs[0]}`}>
          <a className={`${textStyles.redTitle} text-uppercase`}>
            <strong>
              {crumbs[0].replace('-', ' ')}
              {' '}
              <FontAwesomeIcon icon={faCaretRight} />
            </strong>
          </a>
        </Link>
      </li>
      {crumbs[1] && (
        <li className="list-inline-item">
          <Link href={`/${crumbs[1]}`}>
            <a className={`${textStyles.redTitle} text-uppercase`}>
              <strong>
                {crumbs[1].replace('-', ' ')}
                {' '}
                <FontAwesomeIcon icon={faCaretRight} />
              </strong>
            </a>
          </Link>
        </li>
      )}
      <li className="list-inline-item">
        <Link href={router.asPath}>
          <a className={`${textStyles.redTitle} text-uppercase`}>
            <strong>
              {router.query.slug[router.query.slug.length - 1]}
            </strong>
          </a>
        </Link>
      </li>
      {/* {formattedBreadCrumbArr.map(
        (crumb, index) => crumb.title !== 'CATEGORY' && (
        <li key={crumb.title} className="list-inline-item">
          <Link href={crumb.url}>
            <a className={`${textStyles.redTitle} text-uppercase`}>
              <strong>
                {crumb.title}
                {' '}
                {breadCrumbArr.length - 1 !== index && (
                <FontAwesomeIcon icon={faCaretRight} />
                )}
              </strong>
            </a>
          </Link>
        </li>
        ),
      )} */}
    </ul>
  );
}
