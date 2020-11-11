import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import { makeTitle } from '../../utils/helpers';

function Breadcrumbs({ title }) {
  const router = useRouter();

  const currentUrl = router.asPath.split('/');
  const filterUrl = currentUrl.filter((a) => a !== '');
  filterUrl.pop();

  return (
    <div className="mt-0 mb-3 d-print-none">
      <h6>
        <>
          <a href="https://scarincihollenbeck.com" className="red-title proxima-bold">
            HOME
          </a>
          <strong className="text-black mt-2 mx-2 proxima-bold">
            <FontAwesomeIcon icon={faCaretRight} className="red-title icon-w8px-h20px" />
          </strong>
        </>
        {filterUrl.map((url) => (
          <span key={url}>
            <Link href="/category/[slug]" as={`/category/${url}`}>
              <a className="red-title proxima-bold">
                {makeTitle(url)}
              </a>
            </Link>
            <strong className="text-black mt-2 mx-2 proxima-bold">
              <FontAwesomeIcon icon={faCaretRight} className="red-title icon-w8px-h20px" />
            </strong>
          </span>
        ))}
        <>
          <Link as="/law-firm-insights/[...slug]" href={router.asPath}>
            <a className="red-title proxima-bold text-uppercase">
              <u>{title}</u>
            </a>
          </Link>
        </>
      </h6>
    </div>
  );
}

export default Breadcrumbs;
