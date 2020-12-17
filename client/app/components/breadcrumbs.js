import { withRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';

function BreadCrumbs(props, router) {
  const { breadCrumb, categorySlug } = props;

  return (
    <h6>
      <span>
        <a href={`${router.pathname}`} className="red-title proxima-bold">HOME</a>
      </span>
      <strong className="text-black mt-2 mx-2 proxima-bold">
        <FontAwesomeIcon icon={faCaretRight} className="red-title mw-6" />
      </strong>
      {breadCrumb.map((val, indx) => ((indx < breadCrumb.length - 1) ? (
        <span key={val}>
          <span className="red-title proxima-bold text-uppercase">
            { (val === categorySlug) ? (<u>{categorySlug}</u>) : `${categorySlug}` }
          </span>
          <strong className="text-black mt-2 mx-2 proxima-bold">
            <FontAwesomeIcon icon={faCaretRight} className="red-title mw-6" />
          </strong>
        </span>
      ) : (
        <span key={val}>
          <span className="red-title proxima-bold">
            { (val === categorySlug) ? (<u>{val}</u>) : `${val}` }
          </span>
        </span>
      )))}
    </h6>
  );
}

export default withRouter(BreadCrumbs);
