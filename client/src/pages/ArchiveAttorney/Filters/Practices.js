/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { FaCaretDown } from 'react-icons/fa';
import { addRandomKey } from '../../../utils/helpers';

const PracticeListItem = (props) => {
  const { title, onSelect, pChildren } = props;

  return (
    <span>
      <p className="practice-title">
        <button onClick={(e) => onSelect(e, title)} name="practices" type="button" className="proxima-bold practice-link btn btn-link">{title}</button>
      </p>
      <div className="practice-children">
        {
          pChildren.map((fc) => <button key={addRandomKey(fc.ID.toString())} type="button" name="practices" onClick={(e) => onSelect(e, fc.title)} className="dropdown-item btn btn-link">{fc.title}</button>)
        }
      </div>
    </span>
  );
};

const Practices = (props) => {
  const { practices, onSelect, removeVisibilityClass } = props;

  /**
   * 
   * Filter each item into a column
   * 
   **/

  // bankruptcy, intel, public
  const bce = practices.filter((b) => ((b.id === 28345 || b.id === 29587 || b.id === 28276) ? b : ''));

  // commerical, labor, tax
  const cl = practices.filter((b) => ((b.id === 29624 || b.id === 28271 || b.id === 29588) ? b : ''));
  
  // corporate
  const li = practices.filter((b) => b.id === 28270);
  
  // env, litigation
  const pt = practices.filter((b) => ((b.id === 28273 || b.id === 28274) ? b : ''));


  return (
    <li className="dropdown nav-item list-inline-item mr-4 megamenu filter">
      <span
        id="megamneu"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onFocus={removeVisibilityClass}
        onMouseOver={removeVisibilityClass}
        className="dropdown-toggle btn btn-light my-1"
      >
      Filter by practice
        <FaCaretDown className="ml-5 mt-1" />
      </span>
      <div aria-labelledby="megamneu" className="dropdown-menu border-0 p-0 m-0 megamenu-container shadow-sm">
        <div className="container mt--1">
          <div className="row rounded-0 m-0">
            <div className="col-sm-12 col-md-3 mt-md-3">
              {bce.map((ft) => <PracticeListItem key={addRandomKey(ft.id.toString())} title={ft.title} onSelect={onSelect} pChildren={ft.children} />)}
            </div>
            <div className="col-sm-12 col-md-3 mt-md-3">
              {cl.map((ft) => <PracticeListItem key={addRandomKey(ft.id.toString())} title={ft.title} onSelect={onSelect} pChildren={ft.children} />)}
            </div>
            <div className="col-sm-12 col-md-3 mt-md-3">
              {li.map((ft) => <PracticeListItem key={addRandomKey(ft.id.toString())} title={ft.title} onSelect={onSelect} pChildren={ft.children} />)}
            </div>
            <div className="col-sm-12 col-md-3 mt-md-3">
              {pt.map((ft) => <PracticeListItem key={addRandomKey(ft.id.toString())} title={ft.title} onSelect={onSelect} pChildren={ft.children} />)}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

Practices.propTypes = {
  practices: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func,
  removeVisibilityClass: PropTypes.func,
};

Practices.defaultProps = {
  practices: [],
  onSelect: () => {},
  removeVisibilityClass: () => {},
};

PracticeListItem.propTypes = {
  title: PropTypes.string,
  onSelect: PropTypes.func,
  pChildren: PropTypes.arrayOf(PropTypes.object),
};

PracticeListItem.defaultProps = {
  title: '',
  onSelect: () => {},
  pChildren: [],
};

export default Practices;
