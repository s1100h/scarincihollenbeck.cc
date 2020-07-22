import React from 'react';
import PropTypes from 'prop-types';
import './corona-style.scss';


const Corona = (props) => {
  const { coronaPosts } = props;

  return (
    <div className="col-sm-12 px-0 text-center mb-5 border" id="corona">
      <h2 className="red-title mt-3">Client Alert: COVID-19</h2>
      <p className="mx-3 sub-headline">Due to the rapidly changing developments related to the outbreak of novel coronavirus (COVID-19) over the last several weeks, Scarinci Hollenbeck has developed a COVID-19 Preparedness Plan.</p>
      <p className="link">
      For more information, please read
        {' '}
        <a href="https://scarincihollenbeck.com/firm-news/client-alert/client-alert-covid-19/">
        Client Alert: COVID-19
        </a>
      </p>
      <div className="corona-articles mx-3 mt-45">
        <p className="corona-articles-subheadline">
          Additional legal developments and resources regarding COVID-19
        </p>
        <ul className="corona-articles-list no-dots text-center">
          {(coronaPosts.length > 0) && coronaPosts.map(post => (
            <li key={post.id}>
              <p>
                <strong>{post.title}</strong>
                {' '}
                -
                {' '}
                <a href={post.link} className="red-title corona-link">Read full article</a>
              </p>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

Corona.propTypes = {
  coronaPosts: PropTypes.arrayOf(PropTypes.object),
};

Corona.defaultProps = {
  coronaPosts: [],
};

export default Corona;