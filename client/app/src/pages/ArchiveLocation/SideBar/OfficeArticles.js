import React from 'react';
import PropTypes from 'prop-types';
import { addRandomKey } from '../../../utils/helpers';

function OfficeArticles(props) {
  const { posts, title } = props;

  return (
    <div className="mt-5">
      <div className="sidebar-title text-capitalize">
        Latest from
        {' '}
        {title}
      </div>
      <div className="off-white">
        {
          (posts.length > 0) ? posts.map((p) => (
            <div className="p-2 pt-3" key={addRandomKey(p.title)}>
              <a href={p.link}>
                <p className="proxima-bold mb-0">{p.title}</p>
              </a>
              <span className="mt-0 mb-3 z-99">
                {p.author.map((a, i) => (
                  <a href={a.link} key={addRandomKey(a.name)}>
                    <span className="article-link small-excerpt">{a.name}</span>
                    {(i < p.author.length - 1) ? ' | ' : '' }
                  </a>
                ))}
              </span>
            </div>
          ))
            : <h5 className="p-3 d-block mx-auto text-center">Sorry, no recent articles for this office</h5>
        }
      </div>
    </div>
  );
}

OfficeArticles.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

OfficeArticles.defaultProps = {
  posts: [],
  title: '',
};

export default OfficeArticles;
