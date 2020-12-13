import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import textStyles from 'styles/Text.module.css';
import widthStyles from 'styles/utils/Spacing.module.css';

export default function BreadCrumbs(props) {
  const { breadCrumb, categorySlug } = props;

  return (
    <>
      <Link href="/">
        <a className={`${textStyles.redTitle} h6`}>
          <strong>HOME</strong>
        </a>
      </Link>
      <strong className="mt-2 mx-2">
        <FontAwesomeIcon
          icon={faCaretRight}
          className={`${textStyles.redTitle} ${widthStyles.mw6} mb-0 h6`}
        />
      </strong>
      {breadCrumb.map((val, indx) => (indx < breadCrumb.length - 1 ? (
        <span key={val}>
          <strong className={`${textStyles.redTitle} text-uppercase h6`}>
            {val === categorySlug ? <u>{categorySlug}</u> : `${categorySlug}`}
          </strong>
          <strong className="text-black mt-2 mx-2">
            <FontAwesomeIcon
              icon={faCaretRight}
              className={`${textStyles.redTitle} ${widthStyles.mw6}`}
            />
          </strong>
        </span>
      ) : (
        <span key={val}>
          <strong className={`${textStyles.redTitle} h6`}>
            {val === categorySlug ? <u>{val}</u> : `${val}`}
          </strong>
        </span>
      )))}
    </>
  );
}
