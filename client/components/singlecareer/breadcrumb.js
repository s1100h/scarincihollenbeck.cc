import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';

export default function BreadCrumb({ title }) {
  const router = useRouter();

  return (
    <>
      <Link href="/">
        <a className="red-title proxima-bold h6">
          HOME
        </a>
      </Link>
      <strong className="text-black mt-2 mx-2 proxima-bold">
        <FontAwesomeIcon icon={faCaretRight} className="red-title icon-w8px-h20px" />
      </strong>
      <Link href="/careers">
        <a className="red-title proxima-bold">
          CAREERS
        </a>
      </Link>
      <strong className="text-black mt-2 mx-2 proxima-bold">
        <FontAwesomeIcon icon={faCaretRight} className="red-title icon-w8px-h20px" />
      </strong>
      <Link href="/career/[slug]" as={router.asPath}>
        <a className="red-title proxima-bold text-uppercase">
          {title}
        </a>
      </Link>
    </>
  );
}
