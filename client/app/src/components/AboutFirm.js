import React from 'react';
import { Link } from 'react-router-dom';

const AboutFirm = () => (
  <div className="w-100 mt-5">
    <div className="sidebar-title">
      Firm Resources
    </div>
    <div className="off-white">
      <ul className="pl-0 pt-2 pb-1 pr-1 sidebar-content-page">
        <li>
          <Link to='/category/firm-news' className="proxima-bold">
            Firm News
          </Link>
        </li>
        <li>
          <Link to='/category/law-firm-insights' className="proxima-bold">
            Firm Insights
          </Link>
        </li>
        <li>
          <Link to='/category/firm-events' className="proxima-bold">
            Firm Events
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default AboutFirm;
