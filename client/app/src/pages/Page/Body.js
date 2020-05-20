import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from '../../utils/helpers';
import ContactForm from '../../components/ContactForm';
import CovidPosts from './CovidPosts';

function Body(props) {
  const { content, covidPage } = props;
  console.log(covidPage);

  return (
    <div>
      <div className="post-content" dangerouslySetInnerHTML={createMarkup(content)} />
      {(covidPage) && <CovidPosts /> }
      <div className="mt-5 w-100">
        <h4 className="bg-light-gray">
          Contact A Firm Reprepresentative
        </h4>
        <ContactForm />
      </div>
    </div>
  );
}

Body.propTypes = {
  content: PropTypes.string,
  covidPage: PropTypes.bool,
};

Body.defaultProps = {
  content: '',
  covidPage: false,
};

export default Body;
