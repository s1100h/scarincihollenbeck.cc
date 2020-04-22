import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import { makeTitle } from '../../utils/helpers';

function BreadCrumbs(props) {
  const { breadCrumb, categorySlug } = props;

  const firmInsightsBreadCrumbUrl = breadCrumb.map((bc) => bc);

  return (
    <h6>
      <span>
        <a href={`${window.location.origin}`} className="red-title proxima-bold">HOME</a>
        <strong className="text-black mt-2 mx-2 proxima-bold">
          <FontAwesomeIcon icon={faCaretRight} className="red-title" />
        </strong>
      </span>
      {
      ((categorySlug !== 'firm-events') && (categorySlug !== 'firm-news') && !(firmInsightsBreadCrumbUrl.indexOf('law-firm-insights') > -1)) ? (
        <span>
          <a href={`${window.location.origin}/category/law-firm-insights`} className="red-title proxima-bold">LAW FIRM INSIGHTS</a>
          <strong className="text-black mt-2 mx-2 proxima-bold">
            <FontAwesomeIcon icon={faCaretRight} className="red-title" />
          </strong>
        </span>
      ) : ''
    }

      {
      breadCrumb.map((val, indx) => ((indx < breadCrumb.length - 1)
        ? (
          <span key={val}>
            <span>
              <a href={`${window.location.origin}/category/${val}`} className="red-title proxima-bold">
                {(val === categorySlug) ? (<u>{makeTitle(val)}</u>) : `${val}` }
              </a>
            </span>
            <strong className="text-black mt-2 mx-2 proxima-bold">
              <FontAwesomeIcon icon={faCaretRight} className="red-title" />
            </strong>
          </span>
        )
        : (
          <span key={val}>
            <a href={`${window.location.origin}/category/${val}`} className="red-title proxima-bold">
              {(val === categorySlug) ? (<u>{makeTitle(val)}</u>) : `${val}` }
            </a>
          </span>
        )))
    }
    </h6>

  );
}

BreadCrumbs.propTypes = {
  breadCrumb: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  categorySlug: PropTypes.string,
};

BreadCrumbs.defaultProps = {
  breadCrumb: [],
  categorySlug: '',
};

export default BreadCrumbs;
