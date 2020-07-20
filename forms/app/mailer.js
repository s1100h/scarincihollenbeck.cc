/* eslint-disable no-undef */
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();


const recipients = ['ptumulty@sh-law.com', 'psmoeller@sh-law.com'];


// new subscriber
exports.subscriber = (subscriber) => {

	// SMTP transporter object
	const smtpTransport = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			type: 'OAuth2',
			user: process.env.GMAIL_ADDRESS,
			clientId: process.env.GMAIL_OAUTH_CLIENT_ID,
			clientSecret: process.env.GMAIL_OAUTH_CLIENT_SECRET,
			refreshToken: process.env.GMAIL_OAUTH_REFRESH_TOKEN,
			accessToken: process.env.GMAIL_OAUTH_ACCESS_TOKEN,
			expires: Number.parseInt(process.env.GMAIL_OAUTH_TOKEN_EXPIRE, 10),
		},
	});

	// subscriber data
	const { firstName, lastName, email, categoryValues, siteUrl } = subscriber;
  
	// new subscription alert message
	const subscriberMessage = {
		from: process.env.GMAIL_ADDRESS,
		to: recipients[0],
		cc: recipients[1],
		subject: `New subcriber to ${categoryValues.join()}`,
		html: `
      <div style="display:block; width: 1000px;">
      <p><strong>Full Name: </strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subscription Categories:</strong> ${categoryValues.join()}</p>
      <p><strong>Source: </strong><a href="${siteUrl}">${siteUrl}</a></p>
    </div>
    `
	};
 
	smtpTransport.sendMail(subscriberMessage, (error, response) => {
		if (error) {
			console.log(error);
			return error;
		} else {
			console.log(response);
			return response;
		}		
	});
 
}

// inquiry from contact or blog post
exports.inquiry = (inq) => {

	// SMTP transporter object
	const smtpTransport = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			type: 'OAuth2',
			user: process.env.GMAIL_ADDRESS,
			clientId: process.env.GMAIL_OAUTH_CLIENT_ID,
			clientSecret: process.env.GMAIL_OAUTH_CLIENT_SECRET,
			refreshToken: process.env.GMAIL_OAUTH_REFRESH_TOKEN,
			accessToken: process.env.GMAIL_OAUTH_ACCESS_TOKEN,
			expires: Number.parseInt(process.env.GMAIL_OAUTH_TOKEN_EXPIRE, 10),
		},
	});

	// inquiry data
	const { firstName, lastName, subject, email, message, phone, pageTitle, siteUrl } = inq;

	// new inquiry alert message
	const inquiryMessage = {
		from: process.env.GMAIL_ADDRESS,
		to: recipients[0],
		cc: recipients[1],
		subject: `New Inquiry from ${pageTitle}`,
		html: `
			<div style="display:block; width: 1000px;">
			  <p><strong>Full Name: </strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
			  <p><strong>Subject: </strong> ${subject}</p>
			  <p><strong>Message: </strong> ${message}</p>
			  <p><strong>Source: </strong><a href="${siteUrl}">${pageTitle}</a></p>
			</div>
		`
	};
	return smtpTransport;
	// smtpTransport.sendMail(inquiryMessage, (error, response) => {
	// 	if (error) {
	// 		return error;
	// 	} else {
	// 		return response;
	// 	}		
	// });
};


// career email 
exports.career = (career) => {

	// SMTP transporter object
	const smtpTransport = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			type: 'OAuth2',
			user: process.env.GMAIL_ADDRESS,
			clientId: process.env.GMAIL_OAUTH_CLIENT_ID,
			clientSecret: process.env.GMAIL_OAUTH_CLIENT_SECRET,
			refreshToken: process.env.GMAIL_OAUTH_REFRESH_TOKEN,
			accessToken: process.env.GMAIL_OAUTH_ACCESS_TOKEN,
			expires: Number.parseInt(process.env.GMAIL_OAUTH_TOKEN_EXPIRE, 10),
		},
	});

	// career data
	const { contact, title, coverLetter, email, firstName, lastName, phone, resume, writingSample } = career;

	// new career alert message
	const careerMessage = {
		from: process.env.GMAIL_ADDRESS,
		to: contact[0],
		cc: (contact[1]) ? contact[1] : '',
		attachments: [
		  (resume) ? resume : {},
		  (coverLetter) ? coverLetter : {},
		  (writingSample) ? writingSample : {},
		],
		subject: `New Applicant for ${title} position`,
		html: `
			<div style="display:block; width: 1000px;">
			  <h2>New Applicant for the ${title} position</h2>
			  <p><strong>Full Name: </strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p style="margin-top:20px">Resume, cover letter, and writing samples attached.</p>
			</div>
		`
	};

	smtpTransport.sendMail(careerMessage, (error, response) => {
		if (error) {
			console.log(error);
			return error;
		} else {
			console.log(response);
			return response;
		}		
	});
};
