import Link from 'next/link';
import textStyles from 'styles/Text.module.css';

export default function TopNavLinks() {
  return (
    <>
      <p className="py-1 mx-0 px-0 mr-2">
        <span>
          {' '}
          <strong>201-896-4100</strong>
          {' '}
        </span>
        <span className="px-1">
          <strong> | </strong>
        </span>
        <span>
          {' '}
          <strong>info@sh-law.com</strong>
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
}
