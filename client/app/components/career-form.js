import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import BarLoader from 'react-spinners/BarLoader';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import FormReCaptcha from 'components/google-recaptcha-button';
import useInput from 'utils/input-hook';

function bytesToSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  return `${Math.round(bytes / Math.pow(1024, i), 2)} ${sizes[i]}`;
}

export default function CareerForm({ contact, title }) {
  const { value: firstNameInput, bind: bindFirstNameInput, reset: resetFirstNameInput } = useInput('');
  const { value: lastNameInput, bind: bindLastNameInput, reset: resetLastNameInput } = useInput('');
  const { value: emailInput, bind: bindEmailInput, reset: resetEmailInput } = useInput('');
  const { value: phoneInput, bind: bindPhoneInput, reset: resetPhoneInput } = useInput('');
  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState([]);
  const [success] = useState(false);
  const [failure, setFailure] = useState(false);
  const [captcha, setCaptcha] = useState(true);
  const [sendingMessage, setSendingMessage] = useState(false);

  const readUploadedFile = (incomingFile) => {
    if (incomingFile.length === 0) {
      setFailure(true);
    }

    setPreview(files.map((file) => Object.assign(file, {
      preview: URL.createObjectURL(file),
    })));

    // read file blob
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContents = {
        title: incomingFile.name,
        contents: event.target.result,
        size: incomingFile.size,
      };

      setFiles((f) => [...f, fileContents]);
    };
    reader.readAsDataURL(incomingFile);
  };

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles[0] === undefined) {
      alert('Sorry the document you just uploaded exceeds our max limit size. Please upload a document less than 10MB. Thank you.');
    } else {
      readUploadedFile(acceptedFiles[0]);
    }
  }, []);

  const thumbs = files.map((file) => (
    <div className="thumbInner my-3" key={file.title}>
      <p className="my-0 py-0">
        {file.title}
        {' '}
        -
        {' '}
        {bytesToSize(file.size)}
        {' '}
        {(file.size >= 1000000) && (
          <>
            File size exceeds limit
            <FontAwesomeIcon icon={faExclamationCircle} className="text-danger mw-12" />
          </>
        )}
        {(file.size < 1000000) && <FontAwesomeIcon icon={faCheck} className="text-success mw-12" />}
      </p>
    </div>
  ));

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxSize: 1000000,
    multiple: true,
    accept: '.odt,.doc,.docx,.pdf,.dotx',
    onDrop,
  });

  async function formSubmit(e) {
    e.preventDefault();

    const careerInquiry = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      email: emailInput,
      phone: phoneInput,
      files,
      contact,
      title,
    };

    const request = await fetch('https://serverless-career-form-uploader.netlify.app/.netlify/functions/server/career-form', {
      method: 'POST',
      body: JSON.stringify(careerInquiry),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((data) => {
        setSendingMessage(true);
        return data;
      });

    const status = await request.status;

    if (status === 200) {
      setSendingMessage(false);
      resetLastNameInput();
      resetFirstNameInput();
      resetEmailInput();
      resetPhoneInput();
      setFiles([]);
      alert('Your application submission was successful! We will reach out to you shortly. Please, do not try and resubmit your information again. Thank you have a nice day.');
      setCaptcha(true);
    }

    if (status === 404 || status === 500) {
      setSendingMessage(false);
      alert('Sorry there was an error with your submission! Please email info@sh-law.com for further information');
    }

    if (status === 413) {
      setSendingMessage(false);
      alert('Sorry you seem to uploading documents that max the upload size of 10MB. Please email info@sh-law.com for further information');
    }
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
              <Form.Label>Add Cover letter, Resume, and Writing Sample.</Form.Label>
              <Form.Label className="mb-0">
                **
                <strong>Please note</strong>
                {' '}
                the maximum combined file size allowed for a submssion is 10MB. Any submission over 10MB will not be processed. If your files exceed the maximum size, please email the information to Peter Moeller, Director of Business Development at
                <a className="red-title" href="mailto:info@sh-law.com"><u>info@sh-law.com</u></a>
              </Form.Label>
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
                      <strong className="d-block w-100 mb-1">Click here to upload documents or drag them over this area to upload (must be in a .pdf, .odt, .doc, .docx, or .dotx format).</strong>
                      If you are having trouble uploading, please upload a single document at a time. If the upload is successful you will see the title of the document listed above with a green checkmark next to it.
                    </span>
                  </div>
                )}
              </div>
            </Form.Group>
          </Form.Row>
          {(sendingMessage) ? (
            <div className="mb-3">
              <h5 className="red-title">Sending submission...</h5>
              <BarLoader color="#DB2220" />
            </div>
          ) : (
            <>
              <FormReCaptcha setCaptcha={setCaptcha} />
              <Button type="submit" variant="danger" className="px-5" disabled={captcha}>Submit</Button>
              {/* <Button type="submit" variant="danger" className="px-5">Submit</Button> */}
            </>
          )}
        </Form>
      </div>
    </>
  );
}
