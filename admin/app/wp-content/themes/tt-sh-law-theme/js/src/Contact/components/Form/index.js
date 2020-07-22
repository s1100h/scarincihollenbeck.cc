/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import './index.scss';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      successMessage: false,
      spam: true,
    };

    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange(e) {
    const { name, value } = e.target;
    const property = e.target.getAttribute('property');    

    if (name === 'firstName') {
      this.setState({ firstName: value });
    }

    if (name === 'lastName') {
      this.setState({ lastName: value });
    }

    if (name === 'email') {
      this.setState({ email: value });
    }

    if (name === 'phone') {
      this.setState({ phone: value });
    }

    if (name === 'subject') {
      this.setState({ subject: value });
    }

    if (name === 'message') {
      this.setState({ message: value });
    }

    if (property === 'disclaimer') {
      this.setState({ spam: false });
    }

    if (property === 'honeyP0T') {
      this.setState({ spam: true });
    }
  }

  onFormSubmit(e) {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
      spam,
    } = this.state;

    const pageTitle = document.querySelector('h1.text-white.proxima-bold').innerText;
    const siteUrl = window.location.href;

    if (spam === false) {
      const inquiryData = {
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
        pageTitle,
        siteUrl,
      };

      fetch(`${process.env.EMAIL_URL}/shlaw/site/contact/form`, {
        method: 'post',
        body: JSON.stringify(inquiryData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((data) => {
          const { status } = data;

          if (status === 200) {
            this.setState({ successMessage: true });
          }
        });
    }
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
      successMessage,
    } = this.state;

    return (
      <form className="mt--2 mb-3 card p-4" onSubmit={this.onFormSubmit} method="post">
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName" className="sr-only">First name</label>
            <input type="text" className="form-control" name="firstName" onChange={this.onFormChange} id="firstName" placeholder="First name" value={firstName} required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName" className="sr-only">Last name</label>
            <input type="text" className="form-control" name="lastName" onChange={this.onFormChange} id="lastName" placeholder="Last name" value={lastName} required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="sr-only">Email</label>
            <input type="email" className="form-control" name="email" onChange={this.onFormChange} id="email" placeholder="Email" value={email} required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="phone" className="sr-only">Phone</label>
            <input type="tel" className="form-control" name="phone" onChange={this.onFormChange} id="phone" placeholder="Phone" value={phone} required />
          </div>
          <div className="col-sm-12 mb-3">
            <label htmlFor="subject" className="sr-only">Subject</label>
            <input type="text" className="form-control" name="subject" onChange={this.onFormChange} id="subject" placeholder="Subject" value={subject} required />
          </div>
          <div className="col-sm-12 mb-3">
            <label htmlFor="message" className="sr-only">message</label>
            <textarea rows="6" className="form-control" name="message" onChange={this.onFormChange} id="message" placeholder="Message" value={message} required />
          </div>
        </div>
        <div>
          <p className="small-excerpt ml--1">
           The use of the Internet or this form for communication with the firm or any
           individual member of the firm does not establish an attorney-client relationship.
           Confidential or time-sensitive information should not be sent through this form.
          </p>
          <label htmlFor="disclaimer" className="d-flex flex-row mt-3 disclaimer">
            <input type="checkbox" onChange={this.onFormChange} property="disclaimer" className="form-control" id="disclaimer" name="disclaimer" required />
            <span className="text-muted small-excerpt mt-0">I have read the disclaimer *</span>
          </label>
        </div>
        <input type="checkbox" onChange={this.onFormChange} name="honeyP0T" property="honeyP0T" className="d-none" value="1" tabIndex="-1" autoComplete="off" />
        <input type="submit" className="w-25 mt-2 btn btn-danger" value="Submit" />
        {(successMessage) ? <p className="text-success">Thank you for your inquiry one of our representative will reach out to you shortly!</p> : ''}
      </form>
    );
  }
}

export default Form;
