import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import textStyles from 'styles/Text.module.css';
import { makeTitle } from 'utils/helpers';

export default function BreadCrumbs() {
  const router = useRouter();
  let buildUrl = '/';
  const breadCrumbArr = router.asPath.split('/').filter((crumb) => {
    if (crumb !== '') {
      return crumb;
    }
  });

  const formattedBreadCrumbArr = breadCrumbArr.map((crumb, index) => {
    buildUrl += `${breadCrumbArr[index].toString()}/`;

    return {
      url: buildUrl,
      title: makeTitle(crumb),
    };
  });

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
      {formattedBreadCrumbArr.map((crumb, index) => 
        (crumb.title !== 'CATEGORY') && (
          <li key={crumb.title} className="list-inline-item">
            <Link href={crumb.url}>
              <a className={`${textStyles.redTitle} text-uppercase`}>
                <strong>
                  {crumb.title}
                  {' '}
                  {(breadCrumbArr.length - 1 !== index) && <FontAwesomeIcon icon={faCaretRight} />}
                </strong>
              </a>
            </Link>
          </li>
        ))}
    </ul>
  );
}
