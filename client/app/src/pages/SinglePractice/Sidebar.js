import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import SimpleSearch from '../../components/SimpleSearch';

const ShDiamond = 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/sh-mini-diamond.png';


function Sidebar(props) {
  const {
    practiceList,
    corePractices,
  } = props;

  return (
    <div>
      <SimpleSearch />
      <div className="my-4">
        <div className="sidebar-title">
          Get in touch with an attorney
        </div>
        <div className="off-white">
          <div className="off-white mh-375">
            <img src={ShDiamond} alt="Subscribe Scarinci Hollenbeck attorneys" className="mx-auto d-block py-4 w-50" />
            <p className="proxima-bold text-center px-3">
              Are you in need of an attorney that covers this area of law for your business?
            </p>
            <Link type="button" to="/contact" className="mx-auto p-2 d-block btn-danger w-50 text-center small-excerpt border-r-5 mb-3">
              Get in touch today!
            </Link>
          </div>
        </div>
      </div>
      <div className="my-4">
        <a href="#core-practices" className="sidebar-title" data-toggle="collapse" aria-expanded="true">
          Core Practices
          <FontAwesomeIcon icon={faPlus} className="text-white float-right" />
        </a>
        <div id="core-practices" className="collapse show">
          <div className="off-white">
            <ul className="pl-0 pt-2 pb-1 pr-1 sidebar-content-page">
              {corePractices.map((cp) => (
                <li key={cp.name}>
                  <a href={cp.link} key={cp.name} className="proxima-bold">
                    {cp.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <a href="#related-practices" className="sidebar-title" data-toggle="collapse" aria-expanded="true">
          Related Sub-Practices
          <FontAwesomeIcon icon={faPlus} className="text-white float-right" />
        </a>
        <div id="related-practices" className="collapse show">
          <div className="off-white">
            <ul className="pl-0 pt-2 pb-1 pr-1 sidebar-content-page">
              {practiceList.map((v) => <li key={v.title}><a href={v.slug} className={(v.title.length > 40) ? 'small-excerpt proxima-bold' : 'proxima-bold'}>{v.title}</a></li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  practiceList: PropTypes.arrayOf(PropTypes.object),
  corePractices: PropTypes.arrayOf(PropTypes.object),
};

Sidebar.defaultProps = {
  practiceList: [],
  corePractices: [],
};

export default Sidebar;
