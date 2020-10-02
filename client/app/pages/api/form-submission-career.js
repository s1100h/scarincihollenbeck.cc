const nodemailer = require('nodemailer');

async function careerMailer(career) {
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
			accessToken: process.env.GMAIL_OAUTH_ACCESS_TOKEN
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
  
	const sendMail = await smtpTransport.sendMail(careerMessage);
	
	return sendMail;
}

export default async (req, res) => {
  if(req.method === 'POST') {
    try {
      await careerMailer(req.body);

      res.status(200).json({ status: 200, response: 'Career submission process was successful'});
    } catch(error) {
			console.error(error);
      res.status(500).json({ error });
    }
  }
}