import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import textStyles from 'styles/Text.module.css';
import widthStyles from 'styles/utils/Spacing.module.css';

function BreadCrumbs(props, router) {
  const { breadCrumb, categorySlug } = props;

  return (
    <h6>
      <Link href="/">
        <a className={textStyles.redTitle}>
          <strong>HOME</strong>
        </a>
      </Link>
      <strong className="mt-2 mx-2">
        <FontAwesomeIcon
          icon={faCaretRight}
          className={`${textStyles.redTitle} ${widthStyles.mw6}`}
        />
      </strong>
      {breadCrumb.map((val, indx) => (indx < breadCrumb.length - 1 ? (
        <span key={val}>
          <strong className={`${textStyles.redTitle} text-uppercase`}>
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
          <strong className={textStyles.redTitle}>
            {val === categorySlug ? <u>{val}</u> : `${val}`}
          </strong>
        </span>
      )))}
    </h6>
  );
}

export default BreadCrumbs;
