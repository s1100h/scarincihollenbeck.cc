import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from '../../utils/helpers';
import ContactForm from '../../components/ContactForm';
import Breadcrumbs from './Breadcrumbs';
import ArticleDetails from './ArticleDetails';
import SocialShareFooter from './SocialShareFooter';
import AuthorBio from './AuthorBio';

const Body = (props) => {
  const {
    firstFeaturedImg,
    bodyContent,
    author,
    eventCat,
    date,
    title,
    tags,
  } = props;

  return (
    <div>
      <Breadcrumbs title={title} />
      <div dangerouslySetInnerHTML={createMarkup(firstFeaturedImg)} className="f-image" />
      {/** Author & date & Category */}
      <ArticleDetails author={author} date={date} />
      <hr />
      <div className="post-content" dangerouslySetInnerHTML={createMarkup(bodyContent)} />
      {(tags.length > 0) && (
        <div className="small-excerpt ml--21px mb-0">
          <ul className="no-dots list-inline">
            <li className="list-inline-item"><strong>Tag: </strong></li>
            {tags.map((tag, index) => (
              <li key={tag.term_id || tag.ID} className="list-inline-item">
                {tag.name}
                {(index !== tags.length - 1) && ',' }
              </li>
            ))}
          </ul>
        </div>
      )}
      <SocialShareFooter title={title} />
      {/** Author bios */}
      <AuthorBio author={author} />
      {/** Contact form */}
      <div className="w-100 mt-5 hide-print">
        <h4 className="bg-light-gray">{(eventCat) ? 'Contact Us For More Information On This Event' : 'Contact Practice Representative'}</h4>
        <div className="mt-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

Body.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  firstFeaturedImg: PropTypes.string,
  bodyContent: PropTypes.string,
  author: PropTypes.arrayOf(PropTypes.object),
  eventCat: PropTypes.bool,
  tags: PropTypes.arrayOf(PropTypes.object),
};

Body.defaultProps = {
  date: '',
  title: '',
  firstFeaturedImg: '',
  bodyContent: '',
  author: [],
  tags: [],
  eventCat: false,
};

export default Body;
