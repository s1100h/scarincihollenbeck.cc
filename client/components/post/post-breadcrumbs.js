import Link from 'next/link';
import { useRouter } from 'next/router';
import textStyles from 'styles/Text.module.css';

export default function PostBreadCrumbs() {
  const router = useRouter();
  const crumbs = router.asPath
    .split('/')
    .filter((crumb) => crumb !== '')
    .filter((crumb) => crumb.indexOf('https:') < 0);

  return (
    <ul className="list-inline">
      <li className="list-inline-item">
        <Link href="/">
          <a className={`${textStyles.redTitle} text-uppercase`}>
            <strong>
              Home
              {' '}
              <span className="mx-2"> | </span>
            </strong>
          </a>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link href={`/library?category=${crumbs[0]}`}>
          <a className={`${textStyles.redTitle} text-uppercase`}>
            <strong>
              {crumbs[0].replace('-', ' ')}
              {' '}
              <span className="mx-2"> | </span>
            </strong>
          </a>
        </Link>
      </li>
      {/* {(crumbs[1] !== router.query.slug.length - 1) && (
        <li className="list-inline-item">
          <Link href={`/${crumbs[1]}`}>
            <a className={`${textStyles.redTitle} text-uppercase`}>
              <strong>
                {crumbs[1].replace('-', ' ')}
                {' '}
                <span className="mx-2"> | </span>
              </strong>
            </a>
          </Link>
        </li>
      )} */}
      <li className="list-inline-item">
        <Link href={router.asPath}>
          <a className={`${textStyles.redTitle} text-uppercase`}>
            <strong>{router.query.slug[router.query.slug.length - 1]}</strong>
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
                <span className="mx-2"> | </span>
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
