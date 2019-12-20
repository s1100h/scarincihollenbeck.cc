import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from '../../utils/helpers';
import ContactForm from '../../components/ContactForm';

const Body = (props) => {
  const { content } = props;
  
  return (
    <div>
      <div className="post-content" dangerouslySetInnerHTML={createMarkup(content)} />
      <div className="mt-5 w-100">
        <h4 className="bg-light-gray">
          Contact A Firm Reprepresentative
        </h4>
        <ContactForm />
      </div>
    </div>
  );
};

Body.propTypes = {
  content: PropTypes.string,
};

Body.defaultProps = {
  content: ''
};

export default Body;