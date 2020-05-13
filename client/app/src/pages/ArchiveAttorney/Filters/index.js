import React from 'react';
import PropTypes from 'prop-types';
import Keyword from './Keyword';
import Letter from './Letter';
import Practices from './Practices';
import Title from './Title';
import Location from './Location';
import MobileMenu from './MobileMenu';

function Filters(props) {
  const {
    practices,
    alphabet,
    locations,
    designation,
    userInput,
    handleChange,
    onSelect,
    letterClick,
    clearAll,
    onMobileSelect,
    removeVisibilityClass,
  } = props;

  return (
    <>
      {
       (window.innerWidth > 992) ? (
         <nav className="navbar navbar-expand-lg bckground-gray border p-2">
           <Keyword userInput={userInput} handleChange={handleChange} />
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav nav-fill w-100">
               <Practices
                 practices={practices}
                 onSelect={onSelect}
                 removeVisibilityClass={removeVisibilityClass}
               />
               <Location locations={locations} onSelect={onSelect} />
               <Title designation={designation} onSelect={onSelect} />
             </ul>
           </div>
         </nav>
       ) : (
         <div className="bckground-gray p-2">
           <Keyword userInput={userInput} handleChange={handleChange} />
           <MobileMenu title="Filter by practice" name="practices" content={practices} onMobileSelect={onMobileSelect} />
           <MobileMenu title="Filter by location" name="location" content={locations} onMobileSelect={onMobileSelect} />
           <MobileMenu title="Filter by title" name="designation" content={designation} onMobileSelect={onMobileSelect} />
         </div>
       )
     }
     {(window.innerWidth > 992) ? (
        <div className="drkbckground-gray border h-57">
          <div className="row mt-2">
            <Letter alphabet={alphabet} letterClick={letterClick} />
            <div className="col-sm-12 col-md-2">
              <button
                type="button"
                className="btn btn-danger float-right mx-3"
                onClick={() => clearAll()}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="btn btn-danger w-100 mt-3 mb--2"
          onClick={() => clearAll()}
        >
          Clear All
        </button>    
      )}      
    </>
  );
}

Filters.propTypes = {
  practices: PropTypes.arrayOf(PropTypes.object),
  alphabet: PropTypes.arrayOf(PropTypes.string),
  locations: PropTypes.arrayOf(PropTypes.object),
  designation: PropTypes.arrayOf(PropTypes.object),
  userInput: PropTypes.string,
  handleChange: PropTypes.func,
  onSelect: PropTypes.func,
  letterClick: PropTypes.func,
  clearAll: PropTypes.func,
  onMobileSelect: PropTypes.func,
  removeVisibilityClass: PropTypes.func,
};

Filters.defaultProps = {
  practices: [],
  alphabet: [],
  locations: [],
  designation: [],
  userInput: '',
  handleChange: () => {},
  onSelect: () => {},
  letterClick: () => {},
  clearAll: () => {},
  onMobileSelect: () => {},
  removeVisibilityClass: () => {},
};

export default Filters;
