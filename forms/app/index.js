/* eslint-disable no-console */
/* eslint-disable no-undef */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const emailData = require('./mailer.js');
const app = express();
const port = process.env.PORT || 8000;

// url prefix
const urlPrefix = '/shlaw/site/';

// define cors to retrieve requests from 3 urls
// scarincihollenbeck.com, staging, and development domain
app.use(cors());

// parse json form POST requests
app.use(bodyParser.json({ limit: '1000mb'}));
app.use(bodyParser.urlencoded({ extended: true }));

// subscription route
app.post(`${urlPrefix}subscription/form`, async (req, res) => {
  // data (name, last name, email, categories)
  // pass data to nodemailer subscriber service
	const subscribe = await emailData.subscriber(req.body);
 
	res.send(subscribe);
});

// contact route
app.post(`${urlPrefix}contact/form`, async (req, res) => {
  // data (firstName, lastName, subject, message, phone, pageTitle, currentUrl)
  // pass data to nodemailer inquiry service
	const contact = await emailData.inquiry(req.body);
	
	res.send(contact);
});

// career route
app.post(`${urlPrefix}career/form`, async (req, res) => {
  // data (job title, resume, cover letter, additional files)
  // pass data to nodemailer career service
  const career = await emailData.career(req.body);
  
  res.send(career);
})

// home route
app.get('/', (req, res) => res.send(`You must be lost please visit scarincihollenbeck.com`));

// server port
app.listen(port, () => console.log(`-- debug mode scarincihollenbeck.com form routes server is listening on port ${port}`));
