import Link from 'next/link';
import { useRouter } from 'next/router';

const PostBreadCrumbs = () => {
  const router = useRouter();
  const crumbs = router.asPath
    .split('/')
    .filter((crumb) => crumb !== '')
    .filter((crumb) => crumb.indexOf('https:') < 0);

  return (
    <ul className="list-inline">
      <li className="list-inline-item">
        <Link href="/" legacyBehavior>
          <a className="redTitle text-uppercase">
            <strong>
              Home
              {' '}
              <span className="mx-2"> | </span>
            </strong>
          </a>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link href={`/library/category/${crumbs[0]}`} legacyBehavior>
          <a className="redTitle text-uppercase">
            <strong>
              {crumbs[0].replace(/-/g, ' ')}
              {' '}
              <span className="mx-2"> | </span>
            </strong>
          </a>
        </Link>
      </li>

      <li className="list-inline-item">
        <span className="redTitle text-uppercase">
          <strong>{router.query.slug[router.query.slug.length - 1].replace(/-/g, ' ')}</strong>
        </span>
      </li>
    </ul>
  );
};

export default PostBreadCrumbs;
