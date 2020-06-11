
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import { makeTitle } from '../../utils/helpers';

export default function Breadcrumbs(props) {
  const { title } = props;

  const currentUrl = window.location.pathname.split('/');
  const filterUrl = currentUrl.filter((a) => a !== '');
  filterUrl.pop();

  return (
    <div className="mt-0 mb-3">
      <h6>
        <span>
          <a href={`${window.location.origin}`} className="red-title proxima-bold">
            HOME
          </a>
          <strong className="text-black mt-2 mx-2 proxima-bold">
            <FontAwesomeIcon icon={faCaretRight} />
          </strong>
        </span>
        {filterUrl.map((url) => (
          <span key={url}>
            <a href={`${window.location.origin}/category/${url}`} className="red-title proxima-bold">
              {makeTitle(url)}
            </a>
            <strong className="text-black mt-2 mx-2 proxima-bold">
              <FontAwesomeIcon icon={faCaretRight} />
            </strong>
          </span>
        ))}
        <span>
          <a href={`${window.location.href}`} className="red-title proxima-bold text-uppercase">
            <u>{title}</u>
          </a>
        </span>
      </h6>
    </div>
  );
}
