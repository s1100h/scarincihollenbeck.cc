import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons/faCaretLeft';
import NewsScroller from '../../components/NewsScroller';


function Body(props) {
  const {
    results,
    pageNums,
    categorySlug,
    news,
    insight,
    events,
    prev,
    next,
    active,
  } = props;

  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          {results.map((r, i) => (i < 5 ? (
            <div className="p-2" key={r.id}>
              <a href={r.link} className="top-article">
                <h5 className="mb-0">{r.title}</h5>
                <p className="mt-0 mb-3 text-muted small-excerpt">
                  {r.description}
                </p>
              </a>
            </div>
          ) : (
            ''
          )))}
        </div>
        <div className="col-sm-12 col-md-6">
          {results.map((r, i) => (i > 5 ? (
            <div className="p-2" key={r.id}>
              <a href={r.link} className="top-article">
                <h5 className="mb-0">{r.title}</h5>
                <p className="mt-0 mb-3 text-muted small-excerpt">
                  {r.description}
                </p>
              </a>
            </div>
          ) : (
            ''
          )))}
        </div>
      </div>
      <div className="w-100 mt-0 ml--1">
        {results !== undefined && pageNums.length > 1 ? (
          <nav aria-label="pagination">
            <ul className="d-flex flex-wrap no-dots lead">
              <li className="mr-2">
                <a
                  className="text-dark"
                  href={`${window.location.origin}/archives/${categorySlug}/page/${prev}/`}
                  tabIndex="-1"
                  aria-label="previous link"
                >
                  <FontAwesomeIcon icon={faCaretLeft} />
                </a>
              </li>
              {/** Current / First Number */}
              {pageNums.map((val) => (active === val ? (
                <li
                  className={active === val ? 'active mr-2' : 'mr-2'}
                  key={`page-${val}`}
                >
                  <a
                    className="text-dark mt-2"
                    href={`${window.location.origin}/author/${categorySlug}/page/${val}/`}
                  >
                    {val}
                  </a>
                </li>
              ) : (
                ''
              )))}
              {/** ... */}
              <li className="mx-1">...</li>
              {/** Last Number */}
              {pageNums.map((val) => (pageNums.length - 1 === val ? (
                <li
                  className={active === val ? 'active mr-2' : 'mr-2'}
                  key={`page-${val}`}
                >
                  <a
                    className="text-dark"
                    href={`${window.location.origin}/author/${categorySlug}/page/${val}/`}
                  >
                    {val}
                  </a>
                </li>
              ) : (
                ''
              )))}
              <li className="ml-1">
                <a
                  className="text-dark"
                  href={`${window.location.origin}/author/${categorySlug}/page/${next}/`}
                  aria-label="next link"
                >
                  <FontAwesomeIcon icon={faCaretRight} />
                </a>
              </li>
            </ul>
          </nav>
        ) : (
          ''
        )}
      </div>
      <div className="w-100 d-block">
        <NewsScroller title="Firm News" articles={news} />
        <NewsScroller title="Firm Events" articles={events} />
        <NewsScroller title="Firm Insights" articles={insight} />
      </div>
    </div>
  );
}

Body.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
  pageNums: PropTypes.arrayOf(PropTypes.number),
  categorySlug: PropTypes.string,
  news: PropTypes.arrayOf(PropTypes.object),
  insight: PropTypes.arrayOf(PropTypes.object),
  events: PropTypes.arrayOf(PropTypes.object),
  prev: PropTypes.number,
  next: PropTypes.number,
  active: PropTypes.number,
};

Body.defaultProps = {
  results: [],
  pageNums: [],
  categorySlug: '',
  news: [],
  insight: [],
  events: [],
  prev: 0,
  next: 0,
  active: 1,
};

export default Body;
