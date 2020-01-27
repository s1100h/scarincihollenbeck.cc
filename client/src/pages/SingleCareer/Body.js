import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from '../../utils/helpers';


const Body = (props) => {
  const {
    currentTitle,
    currentDescription,
    firstName,
    lastName,
    email,
    changeForm,
    phone,
    fileUpload,
    formSubmit,
    message,
  } = props;

  return (
    <div>
      <div className="p-2 mt-3 bg-light-gray w-100">
        <h4 className="mt-1 mb-0 w-75">{currentTitle}</h4>
      </div>
      <div className="w-100" dangerouslySetInnerHTML={createMarkup(currentDescription)} />
      <div className="w-100 border">
        {(message) ? (
          <p className="text-success mx-3 mt-3">Great, thank you for applying! One of our representatives will be in contact shortly.</p>
        ) : ''}
        <form method="post" className="mt-4">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <p className="text-muted">Please fill out the form below to apply for this position.</p>
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="firstName" className="w-100">
                  <input type="text" id="firstName" name="firstName" className="form-control" aria-describedby="firstName" value={firstName || 'First name'} placeholder="First name" onChange={changeForm} />
                  <span className="sr-only">First Name</span>
                </label>
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="lastName" className="w-100">
                  <input type="text" id="lastName" name="lastName" className="form-control" aria-describedby="lastName" value={lastName || 'Last name'} placeholder="Last name" onChange={changeForm} />
                  <span className="sr-only">Last Name</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <label htmlFor="email" className="w-100">
                  <input type="email" id="email" name="email" className="form-control" aria-describedby="email" value={email || 'Email'} placeholder="Email" onChange={changeForm} />
                  <span className="sr-only">Email</span>
                </label>
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="phone" className="w-100">
                  <input type="tel" id="phone" name="phone" className="form-control" aria-describedby="phone" value={phone || 'Phone'} placeholder="Phone" onChange={changeForm} />
                  <span className="sr-only">Phone</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <label htmlFor="resume" className="w-100">
                    Resume:
                  <input type="file" id="resume" name="resume" className="form-control" aria-describedby="resume" onChange={fileUpload} />
                </label>
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="coverLetter" className="w-100">
                    Cover Letter:
                  <input type="file" id="coverLetter" name="coverLetter" className="form-control" aria-describedby="coverLetter" onChange={fileUpload} />
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <label htmlFor="writingSample" className="w-100 mt-2">
                    Writing Samples/Additional Information:
                  <input type="file" id="writingSample" name="writingSample" className="form-control" aria-describedby="writingSample" onChange={fileUpload} />
                </label>
              </div>
            </div>
          </div>
        </form>
        <button
          type="button"
          className="btn ml-3 w-25 btn-danger my-4"
          onClick={() => formSubmit()}
          onKeyPress={() => formSubmit()}
        >
            Apply Now!
        </button>
      </div>
    </div>
  );
};

Body.propTypes = {
  currentTitle: PropTypes.string,
  currentDescription: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  changeForm: PropTypes.func,
  phone: PropTypes.string,
  fileUpload: PropTypes.func,
  formSubmit: PropTypes.func,
  message: PropTypes.bool,
};

Body.defaultProps = {
  currentTitle: '',
  currentDescription: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: false,
  changeForm: () => {},
  fileUpload: () => {},
  formSubmit: () => {},
};

export default Body;
