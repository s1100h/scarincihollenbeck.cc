import React from 'react';
import { createMarkup } from '../../utils/helpers';
import ArticleDetails from './ArticleDetails';
import SocialShareFooter from './SocialShareFooter';
import AuthorBio from './AuthorBio';
import ContactForm from './ContactForm';
import PropTypes from 'prop-types';


const Body = (props) => {
	const {
		firstFeaturedImg,
		bodyContent,
		author,
    eventCat,
    date,
    title
	} = props;

	return(
		<div>
			<div dangerouslySetInnerHTML={createMarkup(firstFeaturedImg)} className="f-image" />
			{/** Author & date & Category */}
			<ArticleDetails author={author} date={date} />
			<hr />
			<div className="post-content" dangerouslySetInnerHTML={createMarkup(bodyContent)} />
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
	firstFeaturedImg: PropTypes.string,
	bodyContent: PropTypes.string,
	author: PropTypes.arrayOf(PropTypes.object),
	eventCat: PropTypes.bool
};

Body.defaultProps = {
	firstFeaturedImg:'',
	bodyContent: '',
	author:[],
	eventCat: false
};

export default Body;
