import React from 'react';
import PropTypes from 'prop-types';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';

const Sidebar = (props) => {
  const { 
    onSubmit,
    onChange,
    practiceList,
    searchTerm
  } = props;

  return (
    <div>
      <form role="search" method="GET" action={process.env.API_URL} onSubmit={onSubmit}>
        <label htmlFor="searchSite" className="w-100">
          <input name="s" type="search" id="searchSite" placeholder="What are you searching for..." value={searchTerm} onChange={onChange} className="form-control p-2" />
          <span className="sr-only">Search For Attorney</span>
        </label>
      </form>
      <div className="my-3">
      <a href="#core-practices" className="sidebar-title" data-toggle="collapse" aria-expanded="true">
        Core Practices
        <i className="text-white fas float-right mt-1" />
      </a>
      <div id="core-practices" className="collapse show">
        <div className="off-white">
          <ul className="pl-0 pt-2 pb-1 pr-1 no-dots sidebar-content sidebar-content-practice">
            <li>
              <a href="/practices/corporate-transactions-business/" className="small-excerpt">
                Corporate Transactions &amp; Business
              </a>
            </li>
            <li>
              <a href="/practices/environmental-and-land-use/" className="small-excerpt">
                Environmental &amp; Land Use
              </a>
            </li>
            <li>
              <a href="/practices/intellectual-property/" className="small-excerpt">
                Intellectual Property
              </a>
            </li>
            <li>
              <a href="/practices/labor-employment/" className="small-excerpt">
                Labor &amp; Employment
              </a>
            </li>
            <li>
              <a href="/practices/litigation/" className="small-excerpt">
                Litigation
              </a>
            </li>
            <li>
              <a href="/practices/tax-trusts-estates/" className="small-excerpt">
                Tax, Trust &amp; Estates
              </a>
            </li>
            <li>
              <a href="/practices/public-law/" className="small-excerpt">
                Government &amp; Law
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <a href="#related-practices" className="sidebar-title" data-toggle="collapse" aria-expanded="true">
        Related Sub-Practices
        <i className="text-white fas float-right mt-1" />
      </a>
      <div id="related-practices" className="collapse show">
        <div className="off-white">
          <ul className="pl-0 pt-2 pb-1 pr-1 no-dots sidebar-content">
            {practiceList.map(v => <li key={v.ID}><a href={v.slug} className={(v.title.length > 40) ? 'smaller-excerpt' : 'small-excerpt'}>{v.title}</a></li>)}
          </ul>
        </div>
      </div>
    </div>
    </div>  
  );
};

Sidebar.propTypes = {
  searchTerm: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  practiceList: PropTypes.arrayOf(PropTypes.object)
};

Sidebar.defaultProps = {
  searchTerm: '',
  onSubmit: () => {},
  onChange: () => {},
  practiceList: []
};

export default Sidebar;
