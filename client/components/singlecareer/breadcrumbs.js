import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import textStyles from 'styles/Text.module.css';
import widthStyles from 'styles/utils/Spacing.module.css';

export default function SingleCareerBreadCrumbs({ title }) {
  const router = useRouter();

  return (
    <div className="m-3">
      <Link href="/">
        <a className={`${textStyles.redTitle} h6`}>
          <strong>HOME</strong>
        </a>
      </Link>
      <strong className="text-black mt-2 mx-2">
        <FontAwesomeIcon
          icon={faCaretRight}
          className={`${textStyles.redTitle} ${widthStyles.mw6}`}
        />
      </strong>
      <Link href="/">
        <a className={`${textStyles.redTitle} h6`}>
          <strong>CAREERS</strong>
        </a>
      </Link>
      <strong className="text-black mt-2 mx-2">
        <FontAwesomeIcon
          icon={faCaretRight}
          className={textStyles.redTitle}
        />
      </strong>
      <Link href="/career/[slug]" as={router.asPath}>
        <a className={`${textStyles.redTitle} text-uppercase`}>
          <strong>
            {title}
          </strong>
        </a>
      </Link>
    </div>
  );
}
