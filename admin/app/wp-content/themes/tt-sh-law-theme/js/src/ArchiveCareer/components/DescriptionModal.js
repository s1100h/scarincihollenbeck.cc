/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from '../../utils/helpers';
import './index.scss';

class DescriptionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        resume: {},
        coverLetter: {},
        writingSample: {},
        contact: [],
        email: '',
        phone: '',
        firstName: '',
        lastName: '',
        title: '',
      },

      message: false,
    };

    this.formSubmit = this.formSubmit.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }

  componentDidMount() {
    const { contact, title } = this.props;
    this.setState({ form: { contact, title } });
  }

  changeForm(e) {
    const { form } = this.state;
    const { name, value } = e.target;

    const field = name;
    const updatedForm = form;
    updatedForm[field] = value;

    this.setState({ form: updatedForm });
  }

  fileUpload(e) {
    const { form } = this.state;
    const { files, name } = e.target;
    const file = files[0];

    // check if file extension is either a word doc or PDF
    // .odt, .doc, .docx, .pdf
    const ext = file.name.split('.').pop();

    if (ext === 'odt' || ext === 'doc' || ext === 'docx' || ext === 'pdf' || ext === 'dotx') {
      const filename = file.name;
      const contentType = file.type;
      const updatedForm = form;
      const reader = new FileReader();

      reader.onload = (upload) => {
        updatedForm[name] = {
          filename,
          content: upload.target.result.split('base64,')[1],
          encoding: 'base64',
          contentType,
        };

        this.setState({ form: updatedForm });
      };

      reader.readAsDataURL(file);
    } else {
      alert('Please upload either a Word Document or a PDF, thank you');
    }
  }

  formSubmit() {
    const { form } = this.state;
    fetch(`${process.env.COVID_URL}/shlaw/site/career/form`, {
      method: 'post',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => {
        const { status } = data;

        if (status === 200) {
          this.setState({ message: true });
        }
      });
  }

  render() {
    const { id, title, description } = this.props;
    const { form, message } = this.state;
    const {
      firstName,
      lastName,
      email,
      phone,
    } = form;

    return (
      <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby={id} aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="container bg-white">
              <div className="row">
                <div className="col-sm-12">
                  <div className="p-2 mt-3 bg-light-gray d-flex flex-row">
                    <h4 className="mt-1 mb-0 w-95">{title}</h4>
                    <button type="button" className="btn btn-link" data-dismiss="modal">
                      <i className="fas fa-times fa-lg text-dark" />
                    </button>
                  </div>
                </div>
                <div className="col-sm-12 px-4" dangerouslySetInnerHTML={createMarkup(description)} />
                <div className="col-sm-12 border-top">
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
                          <label htmlFor={`firstName-${id}`} className="w-100">
                            <input type="text" id={`firstName-${id}`} name="firstName" className="form-control" aria-describedby="firstName" value={firstName || ''} placeholder="First name" onChange={this.changeForm} />
                            <span className="sr-only">First Name</span>
                          </label>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <label htmlFor={`lastName-${id}`} className="w-100">
                            <input type="text" id={`lastName-${id}`} name="lastName" className="form-control" aria-describedby="lastName" value={lastName || ''} placeholder="Last name" onChange={this.changeForm} />
                            <span className="sr-only">Last Name</span>
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <label htmlFor={`email-${id}`} className="w-100">
                            <input type="email" id={`email-${id}`} name="email" className="form-control" aria-describedby="email" value={email || ''} placeholder="Email" onChange={this.changeForm} />
                            <span className="sr-only">Email</span>
                          </label>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <label htmlFor={`phone-${id}`} className="w-100">
                            <input type="tel" id={`phone-${id}`} name="phone" className="form-control" aria-describedby="phone" value={phone || ''} placeholder="Phone" onChange={this.changeForm} />
                            <span className="sr-only">Phone</span>
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <label htmlFor={`resume-${id}`} className="w-100">
                            Resume (Word Doc or PDF only):
                            <input type="file" id={`resume-${id}`} name="resume" className="form-control" aria-describedby="resume" onChange={this.fileUpload} />
                          </label>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <label htmlFor={`coverLetter-${id}`} className="w-100">
                            Cover Letter (Word Doc or PDF only):
                            <input type="file" id={`coverLetter-${id}`} name="coverLetter" className="form-control" aria-describedby="coverLetter" onChange={this.fileUpload} />
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <label htmlFor={`writingSample-${id}`} className="w-100 mt-2">
                            Writing Samples/Additional Information (Word Doc or PDF only):
                            <input type="file" id={`writingSample-${id}`} name="writingSample" className="form-control" aria-describedby="writingSample" onChange={this.fileUpload} />
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                  <button type="button" className="btn btn-seconday" data-dismiss="modal">Close</button>
                  <button
                    type="button"
                    className="btn ml-3 w-25 btn-danger my-4"
                    onClick={() => this.formSubmit()}
                    onKeyPress={() => this.formSubmit()}
                  >
                    Apply Now!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DescriptionModal.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  contact: PropTypes.arrayOf(PropTypes.string),
};

DescriptionModal.defaultProps = {
  id: '',
  title: '',
  description: '',
  contact: [],
};

export default DescriptionModal;
