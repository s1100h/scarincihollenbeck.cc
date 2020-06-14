import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { headers } from '../utils/helpers';
import useInput from '../utils/input-hook';

const upload = require('superagent');

export default function CareerForm() {
  const { value:firstNameInput, bind:bindFirstNameInput, reset:resetFirstNameInput } = useInput('');
  const { value:lastNameInput, bind:bindLastNameInput, reset:resetLastNameInput } = useInput('');
  const { value:emailInput, bind:bindEmailInput, reset:resetEmailInput } = useInput('');
  const { value:phoneInput, bind:bindPhoneInput, reset:resetPhoneInput } = useInput('');
  const [files, setFiles] = useState([]);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [validated, setValidated] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({accept: '.odt,.doc,.docx,.pdf,.dotx', onDrop });

  function onDrop(files) {
    console.log('files');
    console.log(files);    
  }


  // function fileUpload(e) {
  //   const { form } = this.state;
  //   const { files, name } = e.target;
  //   const file = files[0];

  //   // check if file extension is either a word doc or PDF
  //   // .odt, .doc, .docx, .pdf
  //   const ext = file.name.split('.').pop();

  //   if (ext === 'odt' || ext === 'doc' || ext === 'docx' || ext === 'pdf' || ext === 'dotx') {
  //     const filename = file.name;
  //     const contentType = file.type;
  //     const updatedForm = form;
  //     const reader = new FileReader();

  //     reader.onload = (upload) => {
  //       updatedForm[name] = {
  //         filename,
  //         content: upload.target.result.split('base64,')[1],
  //         encoding: 'base64',
  //         contentType,
  //       };

  //       setForm(updatedForm);
  //     };

  //     reader.readAsDataURL(file);
  //   } else {
  //     alert('Please upload either a Word Document or a PDF, thank you');
  //   }
  // }

 function formSubmit() {
   console.log('this is a form..')
  // const req = upload.post(`${process.env.REACT_APP_FORMS_API}/shlaw/site/career/form`).set(headers);

  // files.forEach((file) => {
  //   req.attach('file', file);
  // });

  // setFiles(files.map((file) => Object.assign(file, {
  //   preview: URL.createObjectURL(file)
  // })));

  // req.end((err) => {
  //   if(err) {
  //     setFailure(true);
  //   }
  //   setSuccess(true);
  // })
    // const headers = {
    //   method: 'post',
    //   body: JSON.stringify(form),
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    // };

    // const request = await fetch(`${process.env.REACT_APP_FORMS_API}/shlaw/site/career/form`, { headers });
    // const json = request.json();
    // const { status } = json;

    // if (status === 200) {
    //   this.setState({ message: true });
    // }
  }

  return (
    <>
      <div className="w-100 border">
        {(successMessage) && (
            <p className="text-success mx-3 mt-3">Great, thank you for applying! One of our representatives will be in contact shortly.</p>
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
                <Form.Control required type="phone" placeholder="phone" {...bindPhoneInput} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>     
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} sm={12} md={6} controlId="validationCustom05">
                <Form.Control required type="email" placeholder="Email" {...bindEmailInput} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} sm={12} md={6} controlId="validationCustom06">
                <Form.Control required type="phone" placeholder="phone" {...bindPhoneInput} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>     
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} sm={12} controlId="validationCustom07">
                <Form.Control required type="email" placeholder="Email" {...bindEmailInput} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>                
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} sm={12}>
              <div {...getRootProps()} className="dropzone-center">
              <input {...getInputProps()} />
              {(isDragActive) ? (
                <div className="red-title text-center mx-auto p-5 d-block">
                  {/** Document image */}
                  <span className="ft-1 mt-3 mt--1">Drop files here...</span>
                </div>
              ) : (
                <div className="red-title text-center mx-auto p-5 d-block">
                  {/** Document image */}
                  <span className="ft-1 mt-3 mt--1">Add Resume, Cover Letter, & Writing Sample...</span>
                </div>
              )}
            </div>
              </Form.Group>
            </Form.Row>
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