/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
import React from 'react';
import PropTypes from 'prop-types';
import AttorneyCard from '../../../components/AttorneyCard';
import { filterByKey } from '../../../utils/helpers';


function Filtered(props) {
  const {
    attorneys,
    userInput,
    select,
  } = props;


  // filter through results
  const practices = filterByKey(select, 'practices');
  const letter = filterByKey(select, 'letter');
  const desgination = filterByKey(select, 'designation');
  const location = filterByKey(select, 'location');

  // filter by key -- practice
  const filterPractices = (attorney) => {
    if (practices.length > 0) {
      return attorney.practices_array.indexOf(practices[0]) > -1;
    } else {
      return attorney;
    }
  };

  // filter by key -- location
  const filterLocation = (attorney) => {
    if (location.length > 0) {
      return attorney.location.indexOf(location[0]) >= 0;
    } else {
      return attorney;
    }
  };

  // filter by key -- designation
  const filterDesignation = (attorney) => {
    if (desgination.length > 0) {
      return attorney.designation.indexOf(desgination[0]) >= 0;
    } else {
      return attorney;
    }
  };

  // filter by key -- query
  const filterQuery = (attorney) => {
    const practiceList = attorney.practices.replace(/&amp;/g, '&');

    if (userInput) {
      if (attorney.title.indexOf(userInput) >= 0) {
        return attorney;
      } if (practiceList.indexOf(userInput.trim()) >= 0) {
        return attorney;
      }
    } else {
      return attorney;
    }
  };

  // filter by key -- letter
  const filterLetter = (attorney) => {
    if (letter.length > 0) {
      return attorney.last_name.charAt(0).toLowerCase() === letter[0].toLowerCase();
    } else {
      return attorney;
    }
  };

  const aFiltered = attorneys
    .filter(filterPractices)
    .filter(filterLocation)
    .filter(filterDesignation)
    .filter(filterLetter)
    .filter(filterQuery);

  return (
    <div className="row">

      {
      aFiltered.map((m) => (
        <div key={m.id} className="col-sm-12 col-md-6 col-lg-4 mb-2">
          <AttorneyCard
            link={m.link}
            image={m.better_featured_image}
            name={m.title}
            title={m.designation}
            number={m.phone}
            email={m.email}
            width="81px"
          />
        </div>
      ))
    }
      {
      (aFiltered.length < 1) && <h3 className="text-center red-title d-block mx-auto my-4">Sorry, no attorneys found according to this query.</h3>
    }
    </div>
  );
};

Filtered.propTypes = {
  attorneys: PropTypes.arrayOf(PropTypes.object),
  select: PropTypes.arrayOf(PropTypes.object),
  userInput: PropTypes.string,
};

Filtered.defaultProps = {
  attorneys: [],
  select: [],
  userInput: '',
};

export default Filtered;
