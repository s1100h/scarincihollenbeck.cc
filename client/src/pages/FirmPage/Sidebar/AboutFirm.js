import React from 'react';
import './index.scss';

const AboutFirm = () => (
  <div className="w-100 mt-3">
    <div className="sidebar-title">
      Firm Resources
    </div>
    <div className="off-white">
      <ul className="pl-0 pt-2 pb-1 pr-1 no-dots sidebar-content">
        <li>
          <a href={`${process.env.API_URL}/category/firm-news/`} className="text-capitalize small-excerpt">
            Firm News
          </a>
        </li>
        <li>
          <a href={`${process.env.API_URL}/category/firm-events/`} className="text-capitalize small-excerpt">
            Firm Events
          </a>
        </li>
        <li>
          <a href={`${process.env.API_URL}/category/law-firm-insights/`} className="text-capitalize small-excerpt">
          Firm Insights
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default AboutFirm;
