import React from 'react';
import PropType from 'prop-types';
import { addRandomKey, createMarkup } from '../../../utils/helpers';
import Search from '../../../components/Search';
import SubscriptionForm from '../SubscriptionForm';
import SHDiamond from '../../../images/sh-mini-diamond.png';

const EventSidebar = (props) => {
  const {
    attorneys,
    hideSubscription,
    show,
    eventDetails,
    toggleModal,
  } = props;

  const eDetails = eventDetails[0];

  const currentDate = new Date();
  const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

  return (
    <div className="col-sm-12 col-md-4 hide-print">
      <Search />
      />
      {/** Event Details */}
      <div className="w-100 mt-4">
        <div className="sidebar-title">
          Event Details
        </div>
        <div className="off-white">
          {
            (eDetails !== undefined && formattedDate < eDetails.date) ? (
              <div className="p-3">
                <span dangerouslySetInnerHTML={createMarkup(eDetails.address)} />
                <p>
                  <strong>Date: </strong>
                  {' '}
                  {eDetails.date}
                  <br />
                  <strong>Start: </strong>
                  {' '}
                  {eDetails.start}
                  <br />
                  <strong>End: </strong>
                  {' '}
                  {eDetails.end}
                </p>
              </div>
            ) : <h5 className="p-4"><strong>Sorry, this event has ended.</strong></h5>
          }

        </div>
      </div>
      {/** MENTIONED ATTORNEYS */}
      {
        (attorneys.length > 0) ? (
          <div className="w-100 mt-4">
            <div className="sidebar-title">
              Mentioned Attorneys
            </div>
            <div className="off-white">
              <ul className="no-dots">
                {
                  attorneys.map(a => (
                    <li key={addRandomKey(a.name)} className="py-2 li-fchild-mt-1">
                      <a href={a.link} className="m-attorneys d-flex flex-row">
                        <img src={a.image} alt={a.name} className="mr-2" />
                        <span className="ml-2 related-attorneys">
                          <h5 className="proxima-bold mb-0">{a.name}</h5>
                          <p className="proxima-regular mt---6">{a.designation}</p>
                        </span>
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        ) : ''
      }
      {/** GET THE LATEST FROM OUR ATTORNEYS */}
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
    </div>
  );
};

EventSidebar.propTypes = {
  searchTerm: PropType.string,
  onChange: PropType.func,
  onSubmit: PropType.func,
  eventDetails: PropType.arrayOf(PropType.object),
  attorneys: PropType.arrayOf(PropType.object),
  hideSubscription: PropType.func,
  show: PropType.bool,
  toggleModal: PropType.func,
  allPractices: PropType.arrayOf(PropType.object),
  allAttorneys: PropType.arrayOf(PropType.object),
  allCategories: PropType.arrayOf(PropType.object),
};

EventSidebar.defaultProps = {
  searchTerm: '',
  onChange: () => {},
  onSubmit: () => {},
  eventDetails: [],
  attorneys: [],
  hideSubscription: () => {},
  show: false,
  toggleModal: () => {},
  allPractices: [],
  allAttorneys: [],
  allCategories: [],
};

export default EventSidebar;
