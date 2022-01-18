import Link from 'next/link';
import { SITE_PHONE, SITE_EMAIL } from 'utils/constants';
import textStyles from 'styles/Text.module.css';

const TopNavLinks = () => (
  <>
    <p className="py-1 mx-0 px-0 mr-2">
      <span>
        {' '}
        <strong>{SITE_PHONE}</strong>
        {' '}
      </span>
      <span className="px-1">
        <strong> | </strong>
      </span>
      <span>
        {' '}
        <strong>{SITE_EMAIL}</strong>
      </span>
      <Link href="/subscribe">
        <a className={`ml-2 ${textStyles.redTitle} font-weight-bold underline`}>
          Join our mailing list
        </a>
      </Link>
      <a
        href="https://secure.lawpay.com/pages/scarincihollenbeck/operating"
        target="_blank"
        rel="noreferrer"
        className={`ml-2 ${textStyles.redTitle} font-weight-bold underline`}
      >
        <u>Make payment</u>
      </a>
    </p>
    <style jsx>{'.underline { text-decoration: underline }'}</style>
  </>
);

export default TopNavLinks;
