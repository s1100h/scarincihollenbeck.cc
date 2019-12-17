import React from 'react';
import PropTypes from 'prop-types';
import SubscriptionForm from './SubscriptionForm';



const ColumnContent = (props) => {
	const { colOneTitle, colOneContent, colTwoTitle, colTwoContent } = props;

	return (
		<div className="container mt-5">
			<div className="row">
			  <div className="col-sm-12 col-md-3 border-right">
			    <h5 className="red-title">{colOneTitle}</h5>
			    <hr />
			    <ul className="ml-0 mh-75">
			    {colOneContent.map(v => <li key={v.name} className="blue-title ml-3"><a href={v.link} className="blue-title proxima-bold mb-0">{v.name}</a></li>)}
				</div>
				<div className="col-sm-12 col-md-3 border-right">
			    <h5 className="red-title">{colTwoTitle}</h5>
			    <hr />
			    <ul className="ml-0 mh-75">
			    {colTwoContent.map(v => <li key={v.name} className="blue-title ml-3"><a href={v.link} className="blue-title proxima-bold mb-0">{v.name}</a></li>)}
				</div>
				<div className="col-sm-12 col-md-3">
				  <h5 className="red-title">Join our mailing list!</h5>
          <hr />
          <div className="ModalForm-main">
            <p className="text-center text-muted small-excerpt">Enter your email and select a category(s) below.</p>
            <SubscriptionForm />
          </div>
				</div>				
			</div>
		</div>
    )
}