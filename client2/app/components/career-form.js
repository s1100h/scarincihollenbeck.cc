import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faCheck';
import { headers } from '../utils/helpers';
import useInput from '../utils/input-hook';

const upload = require('superagent');

export default function CareerForm() {
  const { value:firstNameInput, bind:bindFirstNameInput, reset:resetFirstNameInput } = useInput('');
  const { value:lastNameInput, bind:bindLastNameInput, reset:resetLastNameInput } = useInput('');
  const { value:emailInput, bind:bindEmailInput, reset:resetEmailInput } = useInput('');
  const { value:phoneInput, bind:bindPhoneInput, reset:resetPhoneInput } = useInput('');
  const [files, setFiles] = useState([]);
  const [preview, setPreview ] = useState([]);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [validated, setValidated] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    if(acceptedFiles.length === 0) {
      setFailure(true);
    }

    setPreview(files.map((file) => Object.assign(file, {
      preview: URL.createObjectURL(file)
     })));

    setFiles(acceptedFiles);  

  }, []);

  const thumbs = files.map((file) => (
    <div className="thumbInner" key={file.name}>
      <img src={file.preview} className="img img-responsive w-25" alt={file.name} />
    </div>
  ));

  const { getRootProps, getInputProps, isDragActive } = useDropzone({accept: '.odt,.doc,.docx,.pdf,.dotx', onDrop });


 function formSubmit(e) {
   e.preventDefault();
   const req = upload.post(`${process.env.REACT_APP_FORMS_API}/shlaw/site/career/form`).set(headers);
   const inquiry = {
    firstNameInput,
    lastNameInput,
    emailInput,
    phoneInput,
    files
  };

  req.set(inquiry);

  req.end((err) => {
    if (err) {
      setFailure(true);
    }
    setSuccess(true);
  });  
}

  return (
    <>
      <div className="w-100 border">
      {(success) && (
        <div className="alert alert-success w-75 mt-4">
          Great, all documents have been uploaded and sent to the hiring staff at Scarinci Hollenbeck!            
          <FontAwesomeIcon icon={faCheck} className="float-right my-1" />
        </div>
      )}
      { (failure) && (
          <div className="alert alert-danger w-50 mt-4">
            There was an issue for more information please call 201-896-4100!
            <FaExclamationTriangle className="float-right my-1" />
            <FontAwesomeIcon icon={faExclamationTriangle} className="float-right my-1" />
            faExclamationTriangle
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
                <Form.Label className="mb-0">Add Cover letter, Resume, and Writing Sample</Form.Label>
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
                    <span className="small-excerpt">Click here to upload documents or drag them over this area to upload (must be a .doc, .docx, or .pdf format)</span>
                  </div>
                )}
              </div>
            </Form.Group>           
            </Form.Row>
            <Button type="submit" variant="danger" className="px-5">Submit</Button>
        </Form>
      </div>      
    </>
    // <div className="w-100 border">
    //     : ''}
    //     <form method="post" className="mt-4">
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-sm-12">
    //             <p className="text-muted">Please fill out the form below to apply for this position.</p>
    //           </div>
    //           <div className="col-sm-12 col-md-6">
    //             <label htmlFor="firstName" className="w-100">
    //               <input type="text" id="firstName" name="firstName" className="form-control" aria-describedby="firstName" value={firstName || 'First name'} placeholder="First name" onChange={changeForm} />
    //               <span className="sr-only">First Name</span>
    //             </label>
    //           </div>
    //           <div className="col-sm-12 col-md-6">
    //             <label htmlFor="lastName" className="w-100">
    //               <input type="text" id="lastName" name="lastName" className="form-control" aria-describedby="lastName" value={lastName || 'Last name'} placeholder="Last name" onChange={changeForm} />
    //               <span className="sr-only">Last Name</span>
    //             </label>
    //           </div>
    //         </div>
    //         <div className="row">
    //           <div className="col-sm-12 col-md-6">
    //             <label htmlFor="email" className="w-100">
    //               <input type="email" id="email" name="email" className="form-control" aria-describedby="email" value={email || 'Email'} placeholder="Email" onChange={changeForm} />
    //               <span className="sr-only">Email</span>
    //             </label>
    //           </div>
    //           <div className="col-sm-12 col-md-6">
    //             <label htmlFor="phone" className="w-100">
    //               <input type="tel" id="phone" name="phone" className="form-control" aria-describedby="phone" value={phone || 'Phone'} placeholder="Phone" onChange={changeForm} />
    //               <span className="sr-only">Phone</span>
    //             </label>
    //           </div>
    //         </div>
    //         <div className="row">
    //           <div className="col-sm-12 col-md-6">
    //             <label htmlFor="resume" className="w-100">
    //               Resume:
    //               <input type="file" id="resume" name="resume" className="form-control" aria-describedby="resume" onChange={fileUpload} />
    //             </label>
    //           </div>
    //           <div className="col-sm-12 col-md-6">
    //             <label htmlFor="coverLetter" className="w-100">
    //               Cover Letter:
    //               <input type="file" id="coverLetter" name="coverLetter" className="form-control" aria-describedby="coverLetter" onChange={fileUpload} />
    //             </label>
    //           </div>
    //         </div>
    //         <div className="row">
    //           <div className="col-sm-12 col-md-6">
    //             <label htmlFor="writingSample" className="w-100 mt-2">
    //               Writing Samples/Additional Information:
    //               <input type="file" id="writingSample" name="writingSample" className="form-control" aria-describedby="writingSample" onChange={fileUpload} />
    //             </label>
    //           </div>
    //         </div>
    //       </div>
    //     </form>
    //     <button
    //       type="button"
    //       className="btn ml-3 w-25 btn-danger my-4"
    //       onClick={() => formSubmit()}
    //       onKeyPress={() => formSubmit()}
    //     >
    //       Apply Now!
    //     </button>
    //   </div>
  )
}