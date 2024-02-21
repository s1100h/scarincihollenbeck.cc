import { useState } from 'react';
import { Form } from 'react-bootstrap';
import {
  FormLabelStyled,
  InputGroupStyled,
} from 'styles/attorney-page/GetInTouchForm.styles';
import UploadFileInput from '../../atoms/UploadFileInput';

const InputField = ({ onChange, ...props }) => {
  const [value, setValue] = useState('');
  const onInput = (event) => {
    const value = props.name === 'Phone'
      ? event.target.value.replace(/[^0-9+() ]/g, '')
      : event.target.value;
    setValue(value);
    onChange(event, props.name);
  };

  return <Form.Control value={value} onChange={onInput} {...props} />;
};

const InputsController = ({
  attributes,
  handleChangeValue,
  isNotEmptyInput,
}) => {
  if (attributes.type === 'file') {
    return <UploadFileInput {...attributes} onChange={handleChangeValue} />;
  }
  if (attributes.type === 'textarea') {
    return (
      <textarea
        {...attributes}
        onChange={handleChangeValue}
        className="form-control"
      />
    );
  }
  return (
    <>
      <FormLabelStyled visuallyHidden={isNotEmptyInput}>
        {attributes.name}
      </FormLabelStyled>
      <InputField {...attributes} onChange={handleChangeValue} />
    </>
  );
};

const RenderInputs = ({ arrayOfAttributes, attorneySlug }) => {
  const [isNotEmptyInput, setIsNotEmpty] = useState([]);

  const handleChangeValue = (e, nameInput) => {
    const value = e.target.attributes.type.value !== 'file'
      ? e.target.value
      : e.target.files[0];
    if (value.length === 0) {
      setIsNotEmpty(
        isNotEmptyInput.filter((itemValue) => itemValue !== nameInput),
      );
    }
    return (
      !isNotEmptyInput.includes(nameInput)
      && setIsNotEmpty([...isNotEmptyInput, nameInput])
    );
  };

  return (
    <>
      <input
        type="hidden"
        name="currentPage"
        value={`https://scarincihollenbeck.com${attorneySlug}`}
      />
      {arrayOfAttributes.map((attributes, index) => (
        <InputGroupStyled
          key={attributes.name}
          className={`input-group--${index}`}
        >
          <InputsController
            attributes={attributes}
            handleChangeValue={(event) => handleChangeValue(event, attributes.name)}
            isNotEmptyInput={!isNotEmptyInput.includes(attributes.name)}
          />
        </InputGroupStyled>
      ))}
    </>
  );
};

export default RenderInputs;
