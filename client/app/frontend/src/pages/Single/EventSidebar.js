import React from 'react';
import PropType from 'prop-types';
import { addRandomKey, createMarkup } from '../../utils/helpers';
import Search from '../../components/Search';
import SubscriptionMessage from '../../components/SubscriptionMessage';

function EventSidebar(props) {
  const {
    attorneys,
    show,
    eventDetails,
    toggleModal,
  } = props;

  const eDetails = eventDetails[0];
  return (
    <div className="hide-print">
      <Search />
      {/** Event Details */}
      <div className="w-100 mt-4">
        <div className="sidebar-title">
          Event Details
        </div>
        <div className="off-white">
          {(eDetails !== undefined) && (
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
          )}
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
                  attorneys.map((a) => (
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
      <SubscriptionMessage show={show} toggleModal={toggleModal} />
    </div>
  );
}

EventSidebar.propTypes = {
  eventDetails: PropType.arrayOf(PropType.object),
  attorneys: PropType.arrayOf(PropType.object),
  show: PropType.bool,
  toggleModal: PropType.func,
};

EventSidebar.defaultProps = {
  eventDetails: [],
  attorneys: [],
  show: false,
  toggleModal: () => {},
};

export default EventSidebar;
