/* eslint-disable react/no-danger */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from '../../utils/helpers';
import './index.scss';

class DescriptionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTitle: '',
      currentDescription: '',
      currentId: '',
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
    this.triggerModal = this.triggerModal.bind(this);
    this.hideSubscription = this.hideSubscription.bind(this);
  }

  componentDidMount() {
    const { url } = this.props;
    fetch(`${process.env.API_URL}/wp-json/individual-career/career/${url}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          currentId: url,
          currentTitle: data.title,
          currentDescription: data.positionDescription,
        }, () => {
          // trigger modal dev
          this.triggerModal();
        });
      });
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
    fetch('https://hollenbeckscarinci.com/shlaw/site/career/form', {
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

  hideSubscription() {
    // remove custom modal
    const modal = document.querySelector('.onloadmodal');
    modal.classList.remove('show');
    modal.setAttribute('style', 'padding-right:17px; display:none');

    // remove custom modal background
    const modalBckGround = document.querySelector('.modal-backdrop');
    modalBckGround.setAttribute('style', 'display:none');
  }

  triggerModal() {
    const { currentId } = this.state;
    const modal = document.getElementById(currentId);
    modal.classList.add('show');
    modal.classList.add('onloadmodal');
    modal.setAttribute('style', 'padding-right:17px; display:block;overflow-x: hidden;overflow-y: auto;');
    modal.onclick = () => {
      window.location.hash = '';
      this.hideSubscription();
    };

    // create modal background and add to DOM
    const modalBckGround = document.createElement('div');
    modalBckGround.classList.add('modal-backdrop');
    modalBckGround.classList.add('fade');
    modalBckGround.classList.add('show');
    document.body.appendChild(modalBckGround);
  }

  render() {
    const {
      currentTitle,
      currentDescription,
      currentId,
      form,
      message,
    } = this.state;

    const {
      firstName,
      lastName,
      email,
      phone,
    } = form;

    return (
      <div className="modal fade" id={currentId} tabIndex="-1" role="dialog" aria-labelledby={currentId} aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="container bg-white">
              <div className="row">
                <div className="col-sm-12">
                  <div className="p-2 mt-3 bg-light-gray d-flex flex-row">
                    <h4 className="mt-1 mb-0 w-95">{currentTitle}</h4>
                    <button type="button" className="btn btn-link" data-dismiss="modal">
                      <i className="fas fa-times fa-lg text-dark" />
                    </button>
                  </div>
                </div>
                <div className="col-sm-12" dangerouslySetInnerHTML={createMarkup(currentDescription)} />
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
                          <label htmlFor="firstName" className="w-100">
                            <input type="text" id="firstName" name="firstName" className="form-control" aria-describedby="firstName" value={firstName || 'First name'} placeholder="First name" onChange={this.changeForm} />
                            <span className="sr-only">First Name</span>
                          </label>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <label htmlFor="lastName" className="w-100">
                            <input type="text" id="lastName" name="lastName" className="form-control" aria-describedby="lastName" value={lastName || 'Last name'} placeholder="Last name" onChange={this.changeForm} />
                            <span className="sr-only">Last Name</span>
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <label htmlFor="email" className="w-100">
                            <input type="email" id="email" name="email" className="form-control" aria-describedby="email" value={email || 'Email'} placeholder="Email" onChange={this.changeForm} />
                            <span className="sr-only">Email</span>
                          </label>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <label htmlFor="phone" className="w-100">
                            <input type="tel" id="phone" name="phone" className="form-control" aria-describedby="phone" value={phone || 'Phone'} placeholder="Phone" onChange={this.changeForm} />
                            <span className="sr-only">Phone</span>
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <label htmlFor="resume" className="w-100">
                            Resume:
                            <input type="file" id="resume" name="resume" className="form-control" aria-describedby="resume" onChange={this.fileUpload} />
                          </label>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <label htmlFor="coverLetter" className="w-100">
                            Cover Letter:
                            <input type="file" id="coverLetter" name="coverLetter" className="form-control" aria-describedby="coverLetter" onChange={this.fileUpload} />
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <label htmlFor="writingSample" className="w-100 mt-2">
                            Writing Samples/Additional Information:
                            <input type="file" id="writingSample" name="writingSample" className="form-control" aria-describedby="writingSample" onChange={this.fileUpload} />
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
  url: PropTypes.string,
};

DescriptionModal.defaultProps = {
  url: '',
};

export default DescriptionModal;
