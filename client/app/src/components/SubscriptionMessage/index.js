import React from 'react';
import PropTypes from 'prop-types';
import PopUpForm from './PopUpForm';
const SHDiamond = 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/sh-mini-diamond.png';

function SubscriptionMessage(props){
  const { show, toggleModal } = props;

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
          <PopUpForm />
        </div>
      </div>
    </div>
  );
};

SubscriptionMessage.propTypes = {
  show: PropTypes.bool,
  toggleModal: PropTypes.func,
};

SubscriptionMessage.defaultProps = {
  show: false,
  toggleModal: () => {},
};

export default SubscriptionMessage;
