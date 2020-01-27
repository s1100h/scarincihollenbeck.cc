import React from 'react';
import PropTypes from 'prop-types';
import AttorneyCard from '../../components/AttorneyCard';
import './members.scss';


const Members = (props) => {
  const { title, members } = props;

  return (
    <div className="col-sm-12 mt-5">
      <h4 className="red-title border-bottom">{title}</h4>
      <div className="container articles-container mt-3">
        <div className="row">
          {
            members.map((m) => (
              <div key={m.ID} className="col-sm-12 col-md-6 col-lg-4 mb-2">
                <AttorneyCard
                  link={m.link}
                  image={m.image}
                  name={m.name}
                  title={(title === 'Directors') ? m.title : m.designation}
                  number={(title === 'Directors') ? `201-896-4100 ${m.extension}` : m.phone}
                  email={m.email}
                  height="auto"
                  width="81px"
                />
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
  members: PropTypes.arrayOf(PropTypes.object),
};

Members.defaultProps = {
  title: '',
  members: [],
};

export default Members;
