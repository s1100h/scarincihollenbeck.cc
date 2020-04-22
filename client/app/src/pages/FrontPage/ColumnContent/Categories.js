import React from 'react';
import PropTypes from 'prop-types';

function Categories(props) {
  const { onCategorySelection } = props;

  return (
    <div>
      <h5 className="red-title">Firm Insights</h5>
      <hr />
      <p className="text-muted">Firm Insights is Scarinci Hollenbeck&apos;s library of articles written by our attorneys. It is our way of providing you with the most critical legal updates that could impact your business.</p>
      <form>
        <label htmlFor="category">
          <p className="text-muted">
            Know what you&apos;re looking for? Select a category below:
          </p>
          <select id="category" className="home-select w-100 p-2" onChange={onCategorySelection}>
            <option>Select Category</option>
            <option value="/category/law-firm-insights/business-law/">Business Law</option>
            <option value="/category/law-firm-insights/cannabis-law/">Cannabis Law</option>
            <option value="/category/law-firm-insights/commercial-real-estate/">Commercial Real Estate</option>
            <option value="/category/law-firm-insights/entertainment-and-media/">Entertainment and Media</option>
            <option value="/category/law-firm-insights/environmental-land-use/">Environmental and Land Use</option>
            <option value="/category/law-firm-insights/intellectual-property/">Intellectual Property</option>
            <option value="/category/law-firm-insights/labor-employment/">Labor and Employment</option>
            <option value="/category/law-firm-insights/litigation/">Litigation</option>
            <option value="/category/law-firm-insights/public-law/">Public Law</option>
            <option value="/category/law-firm-insights/tax/">Tax</option>
            <option value="/category/law-firm-insights/technology/">Technology</option>
          </select>
        </label>
      </form>
      <p className="my-3 small-excerpt mb-0">Not sure? Feel free to browse here.</p>
      <a href="/category/law-firm-insights/" className="red-title proxima-bold">
        <u>
          Firm Insights &gt;&gt;
        </u>
      </a>
    </div>
  );
}


Categories.propTypes = {
  onCategorySelection: PropTypes.func,
};

Categories.defaultProps = {
  onCategorySelection: () => {},
};

export default Categories;
