/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { splitUrlPreview, createMarkup, splitUrl, sumbitSearchForm } from '../../utils/helpers';
import './index.scss';


class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      t: {
        keyword: '',
        attorney: '',
        practice: '',
        category: '',
      },
      allAttorneys: [],
      allPractices: [],
      allCategories: [],
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
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }


  componentDidMount() {
    const { career } = this.props.match.params
    console.log(`${process.env.API_URL}/wp-json/individual-career/career/${career}`);
    fetch(`${process.env.API_URL}/wp-json/individual-career/career/${career}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          currentId: career,
          currentTitle: data.title,
          currentDescription: data.positionDescription,
        });
      });

    // get practices
    fetch(`${process.env.API_URL}/wp-json/attorney-search/practices`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ allPractices: data });
      });

    // get attorneys
    fetch(`${process.env.API_URL}/wp-json/attorney-search/attorneys`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ allAttorneys: data });
      });

    // get categories
    fetch(`${process.env.API_URL}/wp-json/wp/v2/categories?per_page=100`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ allCategories: data });
      });

    // get latest posts
    fetch(`${process.env.API_URL}/wp-json/single/post/develop-in-a-jersey-city-inclusionary-zone`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ posts: data.posts });
      })
  }

  onChange(event) {
    const { value, name } = event.target;
    const { t } = this.state;
    t[name] = value;
    this.setState({ t });
  }

  onSubmit() {
    const { t } = this.state;    
    window.location = sumbitSearchForm(t);
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

  render() {
    const {
      searchTerm,
      allPractices,
      allAttorneys,
      allCategories,
      currentTitle,
      currentDescription,
      currentId,
      message,
      form,
    } = this.state;

    const {
      firstName,
      lastName,
      email,
      phone,
    } = form;

    return (
      <div>
        <Header title={currentTitle}  />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-7">
              {/** Bread crumbs -- Start */}
              <h6>
              <span>
                <a href={`${window.location.origin}`} className="red-title proxima-bold">HOME</a>
              </span>
              <strong className="text-black mt-2 mx-2 proxima-bold">
                <i className="fas fa-caret-right" />
              </strong>
              <span>
                <a href={`${window.location.origin}/careers`} className="red-title proxima-bold">CAREERS</a>
              </span>
              
            </h6>
              {/** Bread crumbs -- End */}
              {/** Single Career Content -- Start */}
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
                  <button
                    type="button"
                    className="btn ml-3 w-25 btn-danger my-4"
                    onClick={() => this.formSubmit()}
                    onKeyPress={() => this.formSubmit()}
                  >
                    Apply Now!
                  </button>
                </div>            
              {/** Single Career Content -- End */}
            </div>
            <Sidebar
              searchTerm={searchTerm}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
              allPractices={allPractices}
              allAttorneys={allAttorneys}
              allCategories={allCategories}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
