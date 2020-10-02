const nodemailer = require('nodemailer');

async function subscriptionMailer(subscriber) {
  const { firstName, lastName, email, categoryValues, siteUrl } = subscriber;
  const recipients = ['ptumulty@sh-law.com', 'psmoeller@sh-law.com'];
  
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
  
  return smtpTransport.sendMail(subscriberMessage);
}

export default async (req, res) => {
  if(req.method === 'POST') {
    try {
      await subscriptionMailer(req.body);

      res.status(200).json({ status: 200, response: 'Subscription process was successful'});
    } catch(error) {

      res.status(500).json({status: 500, response: error});
    }
  }
}