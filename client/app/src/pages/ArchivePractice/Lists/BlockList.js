import React from 'react';
import PropTypes from 'prop-types';

function BlockList(props) {
  const { list } = props;
  return (
    <div className="mt-5">
      <ul className="practices row no-dots">
        {
          list.map((v) => (
            <li className="col-sm-12 col-md-4 text-center m-0 mt-2" key={v.ID}>
              <div className="dropdown-toggle practice-menu-box" id={`menu-item-dropdown-${v.ID}`}>
                <a href={v.slug} className="practice-link">
                  {v.title}
                </a>
                {
                (v.children.length > 0) ? (
                  <ul className="practice-dropdown dropdown-menu mx-0 w-100 px-0 no-dots mt-2">
                    {
                      v.children.map((vc) => (
                        <li key={vc.ID}>
                          <a href={vc.slug} className="practice-dropdown-child dropdown-item">
                            {vc.title}
                          </a>
                        </li>
                      ))
                    }
                  </ul>
                ) : ''
              }
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

BlockList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

BlockList.defaultProps = {
  list: [],
};

export default BlockList;
