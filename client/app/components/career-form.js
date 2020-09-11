import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import FormReCaptcha from './google-recaptcha-button';
import useInput from '../utils/input-hook';

export default function CareerForm({ contact, title }) {
  const { value: firstNameInput, bind: bindFirstNameInput, reset: resetFirstNameInput } = useInput('');
  const { value: lastNameInput, bind: bindLastNameInput, reset: resetLastNameInput } = useInput('');
  const { value: emailInput, bind: bindEmailInput, reset: resetEmailInput } = useInput('');
  const { value: phoneInput, bind: bindPhoneInput, reset: resetPhoneInput } = useInput('');
  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState([]);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [captcha, setCaptcha] = useState(true);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length === 0) {
      setFailure(true);
    }

    setPreview(files.map((file) => Object.assign(file, {
      preview: URL.createObjectURL(file),
    })));

    // read file blob    
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContents = {
        title: acceptedFiles[0].name,
        contents: event.target.result
      };

      setFiles(files => [...files, fileContents]);
      
    };
    reader.readAsDataURL(acceptedFiles[0]);
  }, []);

  const thumbs = files.map((file) => (
    <div className="thumbInner" key={file.title} className="my-3">
      <p className="my-0 py-0">
        {file.title}
        {' '}
        -
        {' '}
        <FontAwesomeIcon icon={faCheck} className="text-success mw-12" />
      </p>
    </div>
  ));

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ accept: '.odt,.doc,.docx,.pdf,.dotx', onDrop });


  async function formSubmit(e) {
    e.preventDefault();
    const careerInquiry = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      email: emailInput,
      phone: phoneInput,
      files: files,
      contact: contact,
      title: title
    };

    const headers = {
      method: 'post',
      body: JSON.stringify(careerInquiry),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const request = await fetch('https://forms.scarincihollenbeck.com/shlaw/site/career/form', headers);
    const status = await request.status;

    if (status === 200) {
      setSuccessMessage(true);
      resetLastNameInput();
      resetFirstNameInput();
      resetEmailInput();
      resetPhoneInput();
    }

    console.log('status');
    console.log(status);
  }

  return (
    <>
      <div className="w-100 border">
        {(success) && (
        <div className="alert alert-success w-75 mt-4">
          Great, all documents have been uploaded and sent to the hiring staff at Scarinci Hollenbeck!
        </div>
        )}
        { (failure) && (
        <div className="alert alert-danger w-75 mt-4">
          There was an issue for more information please email psmoeller@sh-law.com or ptumulty@sh-law.com
        </div>
        )}
      </div>
      <div className="mt-4">
        <p className="text-muted">Please fill out the form below to apply for this position.</p>
        <Form method="post" onSubmit={formSubmit}>
          <Form.Row>
            <Form.Group as={Col} sm={12} md={6} controlId="validationCustom01">
              <Form.Control required type="text" placeholder="First name" {...bindFirstNameInput} />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} sm={12} md={6} controlId="validationCustom02">
              <Form.Control required type="text" placeholder="Last name" {...bindLastNameInput} />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} sm={12} md={6} controlId="validationCustom03">
              <Form.Control required type="email" placeholder="Email" {...bindEmailInput} />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} sm={12} md={6} controlId="validationCustom04">
              <Form.Control required type="phone" placeholder="Phone" {...bindPhoneInput} />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} sm={12}>
              <Form.Label className="mb-0">Add Cover letter, Resume, and Writing Sample. <strong>No more than 4 documents, please.</strong></Form.Label>
              <div className="thumbsContainer">
                {thumbs}
              </div>
              <div {...getRootProps()} className="dropzone-center">
                <input {...getInputProps()} />
                {(isDragActive) ? (
                  <div className="red-title my-4 text-center d-block">
                    {/** Document image */}
                    <span className="small-excerpt">Drop files here...</span>
                  </div>
                ) : (
                  <div className="red-title my-4 text-center d-block">
                    {/** Document image */}
                    <span className="small-excerpt">
                      <strong className="d-block w-100 mb-1">Click here to upload documents or drag them over this area to upload (must be in a .pdf, .odt, .doc, .docx, or .dotx format).</strong>If you are having trouble uploading, please upload a single document at a time. If the upload is successful you will see the title of the document listed above with a green checkmark next to it.
                    </span>
                  </div>
                )}
              </div>
            </Form.Group>
          </Form.Row>
          <FormReCaptcha setCaptcha={setCaptcha} />
          {(successMessage) && <p className="text-success m-2 proxima-bold">Thank you for applying one of our representative will reach out to you shortly!</p>}

          {/* disabled={captcha} */}
          <Button type="submit" variant="danger"  className="px-5">Submit</Button>
        </Form>
      </div>
    </>
  );
}
