import React from 'react';
import PropTypes from 'prop-types';

const MobileMenu = (props) => {
  const {
    content,
    onMobileSelect,
    title,
    name,
  } = props;

  return (
    <div className="my-2">
      <select name={name} onChange={onMobileSelect} className="mobile-select">
        <option value="">{title}</option>
        {
          content.map((p) => (
            <option key={p.ID} value={p.title} name="practices" className="mobile-option">{p.title}</option>
          ))
        }
      </select>
    </div>
  );
};

MobileMenu.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object),
  onMobileSelect: PropTypes.func,
};

MobileMenu.defaultProps = {
  title: '',
  name: '',
  content: [],
  onMobileSelect: () => {},
};

export default MobileMenu;
