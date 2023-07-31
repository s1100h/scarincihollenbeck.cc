import React, { useState, useRef, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { BsPaperclip } from 'react-icons/bs';
import {
  UploadContainer, UploadIcon, UploadRow, UploadTitle,
} from '../../styles/UploadFileInput.style';

const UploadFileInput = ({ onChange, ...attributes }) => {
  const [fileName, setFileName] = useState('');
  const ref = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    onChange(event, attributes.name);
    setFileName(file.name);
  };

  const handleClick = () => {
    ref.current.click();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      ref.current.click();
    }
  };

  return (
    <UploadContainer>
      <UploadTitle>
        {attributes.label}
        <span>{attributes.addInformation}</span>
      </UploadTitle>
      <UploadRow>
        <UploadIcon>
          <BsPaperclip size={20} />
        </UploadIcon>
        <Form.Control type="file" onChange={handleFileChange} ref={ref} htmlSize={0} className="d-none" {...attributes} role="button" tabIndex="0" onKeyDown={handleKeyDown} />
        <div className="w-100" role="button" tabIndex="0" onClick={handleClick} onKeyDown={handleKeyDown}>
          <Form.Control type="text" name={`${attributes?.name}Text`} value={fileName} placeholder={attributes.placeholder || 'Attach the file'} readOnly disabled />
        </div>
      </UploadRow>
    </UploadContainer>
  );
};

export default UploadFileInput;
