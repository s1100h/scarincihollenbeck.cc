import { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { BsPaperclip } from 'react-icons/bs';
import {
  UploadContainer,
  UploadIcon,
  UploadRow,
  UploadTitle,
} from '../../styles/UploadFileInput.style';

const UploadFileInput = ({ onChange, ...attributes }) => {
  // const [fileName, setFileName] = useState('');
  const ref = useRef(null);

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (!file) return;
  //
  //   onChange(event, attributes.name);
  //   setFileName(file.name);
  // };

  // const handleClick = () => {
  //   ref.current.click();
  // };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      ref.current.click();
    }
  };

  return (
    <UploadContainer>
      <UploadTitle>
        {attributes.label}
        {attributes.rules?.includes('required') && (
          <span> (This field is required)</span>
        )}
      </UploadTitle>
      <UploadRow>
        <UploadIcon>
          <BsPaperclip size={20} />
        </UploadIcon>
        <Form.Control
          // onChange={handleFileChange}
          placeholder={attributes.placeholder || 'Attach the file'}
          ref={ref}
          htmlSize={0}
          {...attributes}
          role="button"
          tabIndex="0"
          onKeyDown={handleKeyDown}
        />
      </UploadRow>
    </UploadContainer>
  );
};

export default UploadFileInput;
