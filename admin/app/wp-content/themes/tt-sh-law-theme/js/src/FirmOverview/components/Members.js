import React from 'react';
import PropTypes from 'prop-types';
import './members.scss';


const Members = (props) => {

  const { title, members } = props;

  return (
    <div className="col-sm-12 mt-5">
      <h4 className="red-title border-bottom">{title}</h4>
      <div className="container articles-container mt-3">
        <div className="row">      
          {
            members.map(m => (
              <div key={m.ID} className="col-sm-12 col-md-6 col-lg-4 mb-2">
                <div className="attorney-card d-flex flex-row">
                  <a href={m.link}>
                    <img src={m.image} alt={m.name} className={(title === 'Directors') ? 'w-30 mr-5' : 'w-75 mr-1' } />
                  </a>
                  <div className={(title === 'Directors') ? 'mt-2 ml--1' : 'mt-3 ml--1'}>
                    <a href={m.link}>
                      <p className="text-uppercase red-title small-excerpt">
                        <strong>{m.name}</strong>
                      </p>
                      <p className="mb-1 small-excerpt">
                        <strong>
                          {title === 'Directors' ? m.title : m.designation }
                        </strong>
                      </p>
                    </a>
                    <i className="fas fa-phone d-block small-excerpt">
                    <span className="proxima-thin">
                      {' '}
                      {(title === 'Directors') ? `201-896-4100 ${m.extension}` : m.phone}
                      </span>
                    </i>
                    <i className="fas fa-envelope d-block small-excerpt">
                      <span className="proxima-thin">
                      {' '}
                      {m.email}
                      </span>
                    </i>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

Members.propTypes = {
  title: PropTypes.string,
  members: PropTypes.arrayOf(PropTypes.object)
};

Members.defaultProps = {
  title: '',
  members: [],
};

export default Members;
