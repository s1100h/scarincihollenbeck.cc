/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PageHead from '../../components/Head/page';
import ErrorBoundary from '../../components/ErrorBoundary';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import LargeSidebar from '../../layouts/LargeSidebar';
import ContactForm from '../../components/ContactForm';
import Page404 from '../page404';
import BreadCrumb from './BreadCrumb';
import Body from './Body';
import Sidebar from './Sidebar';
import { headers } from '../../utils/helpers';
import { blogHeaderJPG, blogHeaderWebP } from '../../utils/next-gen-images';


class SingleCareer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTitle: '',
      currentDescription: '',
      currentId: '',
      seo: {},
      show: false,
      message: false,
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
        spinner: false,
        error: false,
      },
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }


  async componentDidMount() {
    const { match } = this.props;
    const { career } = match.params;
    
    try {
      const response = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/individual-career/career/${career}`, { headers });
      const json = await response.json();
      const { title, positionDescription, seo } = json;

      this.setState({
        currentId: career,
        currentTitle: title,
        currentDescription: positionDescription,
        seo,
      });
    } catch(err) {
      this.setState({ error: true });
    }
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

  async formSubmit() {
    const { form } = this.state;
    const headers = {
      method: 'post',
      body: JSON.stringify(form),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const request = await fetch(`${process.env.REACT_APP_FORMS_API}/shlaw/site/career/form`, { headers });
    const json = request.json();
    const { status } = json;

    if (status === 200) {
      this.setState({ message: true });
    }
  }

  toggleModal() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  render() {
    const {
      currentTitle,
      currentDescription,
      message,
      form,
      seo,
      show,
      error,
    } = this.state;

    const {
      firstName,
      lastName,
      email,
      phone,
    } = form;

    if(error) {
      return <Page404 />;
    }

    return (
      <div id="single-career">
        <PageHead seo={seo} />
          <SingleSubHeader
            imageWebp={blogHeaderWebP}            
            imageJPG={blogHeaderJPG}
            title={currentTitle}
            subtitle=" Our commitment to diversity and equal opportunity enables Scarinci Hollenbeck to recruit, retain, and promote the best attorneys."
          />
          <LargeSidebar
            body={(
              <div>
                <BreadCrumb currentTitle={currentTitle} />
                <Body
                  currentTitle={currentTitle}
                  currentDescription={currentDescription}
                  message={message}
                  formSubmit={this.formSubmit}
                  formChange={this.formChange}
                  lastName={lastName}
                  firstName={firstName}
                  email={email}
                  phone={phone}
                  fileUpload={this.fileUpload}
                />
                <ContactForm />
              </div>
            )}
            sidebar={(<Sidebar show={show} toggleModal={this.toggleModal} />)}
          />
      </div>
    );
  }
}

export default SingleCareer;
