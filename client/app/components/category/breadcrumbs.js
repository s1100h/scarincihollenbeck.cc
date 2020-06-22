import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import { makeTitle } from '../../utils/helpers';

export default function BreadCrumb(props) {
  const { title } = props;
  const router = useRouter();
  const currentPath = router.asPath.split('/');
  const breadCrumbPath = currentPath.filter(path => path !== '' && path !== 'category');

  return (
    <>
      <Link href="/">
        <a className="red-title proxima-bold h6">
          HOME
        </a>
      </Link>
      <strong className="text-black mt-2 mx-2 proxima-bold">
        <FontAwesomeIcon icon={faCaretRight} className="red-title mw-6" />
      </strong>
      {(breadCrumbPath.length > 0) && breadCrumbPath.map((crumb, index) => (
          <span key={crumb}>
            <Link href="/category[slug]" as={`/category/${crumb}`}>
              <a className="red-title proxima-bold h6">
                {makeTitle(crumb)}
              </a>
            </Link>
            {((breadCrumbPath.length - 1) !== index) && (
              <strong className="text-black mt-2 mx-2 proxima-bold">
                <FontAwesomeIcon icon={faCaretRight} className="red-title mw-6" />
              </strong>
            )}
          </span>
      ))}      
    </>    
  );
}