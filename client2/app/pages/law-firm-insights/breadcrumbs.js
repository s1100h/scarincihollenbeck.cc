import { withRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import { makeTitle } from '../../utils/helpers';

function Breadcrumbs(props, router) {
  const { title } = props;

  console.log('window.location.pathname');
  console.log(router.pathname);
  
  console.log('window.location.origin');
  console.log(router.pathname);

  console.log('window.location.origin');
  console.log(router.pathname);

  console.log('window.location.href');
  console.log(router.pathname);

  const currentUrl = router.pathname.split('/');
  const filterUrl = currentUrl.filter((a) => a !== '');
  filterUrl.pop();

  return (
    <div className="mt-0 mb-3">
      <h6>
        <span>
          <a href={`${router.pathname}`} className="red-title proxima-bold">
            HOME
          </a>
          <strong className="text-black mt-2 mx-2 proxima-bold">
            <FontAwesomeIcon icon={faCaretRight} />
          </strong>
        </span>
        {filterUrl.map((url) => (
          <span key={url}>
            <a href={`${router.pathname}/category/${url}`} className="red-title proxima-bold">
              {makeTitle(url)}
            </a>
            <strong className="text-black mt-2 mx-2 proxima-bold">
              <FontAwesomeIcon icon={faCaretRight} />
            </strong>
          </span>
        ))}
        <span>
          <a href={`$router.pathname}`} className="red-title proxima-bold text-uppercase">
            <u>{title}</u>
          </a>
        </span>
      </h6>
    </div>
  );
}

export default withRouter(Breadcrumbs);
