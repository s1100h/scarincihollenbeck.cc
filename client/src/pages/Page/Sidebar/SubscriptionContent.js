import React from 'react';
import PropTypes from 'prop-types';
import SubscriptionForm from '../../../components/SubscriptionForm';
import SHDiamond from '../../../images/sh-mini-diamond.png';

const SubscriptionContent = (props) => {
  const { toggleModal, hideSubscription, show  } = props;

  return (
    <div className="w-100 mt-4">
        <div className="sidebar-title">
          Get the latest from our attorneys!
        </div>
        <div className="off-white mh-375">
          <img src={SHDiamond} alt="Subscribe Scarinci Hollenbeck attorneys" className="mx-auto d-block py-4 w-50" />
          <p className="proxima-bold text-center px-3">
            Please fill out our short form to get the latest articles
            from the Scarinci Hollenbeck attorneys weekly on the cutting-edge legal topics.
          </p>
          <button type="button" onClick={() => toggleModal()} className="mx-auto p-2 d-block btn-danger w-50 text-center border-r-5 mb-3" data-toggle="modal" data-target="#subscriptionModal">
            Subscribe Now!
          </button>
          <div className={(show) ? 'modal fade show' : 'modal fade'} id="subscriptionModal" tabIndex="-1" role="dialog" aria-labelledby="subscriptionModalLabel" aria-hidden="true">
            <SubscriptionForm hideSubscription={hideSubscription} />
          </div>
        </div>
      </div>
  );
};

SubscriptionContent.propTypes = {
  toggleModal: PropTypes.func,
  hideSubscription:PropTypes.func,
  show: PropTypes.bool,
};

SubscriptionContent.defaultProps = {
  toggleModal: () => {},
  hideSubscription: () => {},
  show: false,
};

export default SubscriptionContent;
