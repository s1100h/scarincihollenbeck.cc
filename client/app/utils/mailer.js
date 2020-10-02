const nodemailer = require('nodemailer');

export function inquiryMailer(inquiry) {
  const { firstName, lastName, subject, email, message, phone, pageTitle, siteUrl } = inquiry;

  // SMTP transporter object
	const smtpTransport = await nodemailer.createTransport({
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
	smtpTransport.sendMail(inquiryMessage, (error, response) => {
		if (error) {
			console.log(error);
			return error;
		} else {
			console.log(response);
			return response;
		}		
	});
}

export function careerMailer(career) {
  const { contact, title, email, firstName, lastName, phone, files } = career;
	
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

	const attachments = files.map(file => {
		return {
			filename: file.title,
			content: file.contents.split("base64,")[1],
			encoding: 'base64'
		}
	})

	// new career alert message
	const careerMessage = {
		from: process.env.GMAIL_ADDRESS,
		to: contact[0],
		cc: (contact[1]) ? contact[1] : '',
		attachments: attachments,
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
}