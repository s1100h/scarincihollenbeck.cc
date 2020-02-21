import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../../components/Search';
import SubscriptionMessage from '../../../components/SubscriptionMessage';


const Sidebar = (props) => {
  const { show, toggleModal } = props;

  return (
    <div className="hide-print">
      <Search />
      <SubscriptionMessage show={show} toggleModal={toggleModal} />
    </div>
  );
};

Sidebar.propTypes = {
  show: PropTypes.bool,
  toggleModal: PropTypes.func,
};

Sidebar.defaultProps = {
  show: false,
  toggleModal: () => {},
};

export default Sidebar;
