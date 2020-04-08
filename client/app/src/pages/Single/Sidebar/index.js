import React from 'react';
import PropType from 'prop-types';
import { addRandomKey } from '../../../utils/helpers';

import Search from '../../../components/Search';
import TrendingStories from '../../../components/TrendingStories';
import SubscriptionMessage from '../../../components/SubscriptionMessage';

const Sidebar = (props) => {
  const {
    posts,
    attorneys,
    hideSubscription,
    show,
    toggleModal,
  } = props;

  return (
    <div className="hide-print">
      <Search />
      {/** TOP ARTICLES */}
      <TrendingStories content={posts} />
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
};

Sidebar.propTypes = {
  posts: PropType.arrayOf(PropType.object),
  attorneys: PropType.arrayOf(PropType.object),
  show: PropType.bool,
  toggleModal: PropType.func,
  hideSubscription: PropType.func,
};

Sidebar.defaultProps = {
  posts: [],
  attorneys: [],
  show: false,
  toggleModal: () => {},
  hideSubscription: () => {},
};

export default Sidebar;
