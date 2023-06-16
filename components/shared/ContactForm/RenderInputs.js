import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { FormLabelStyled, InputGroupStyled } from 'styles/attorney-page/GetInTouchForm.styles';

const InputField = ({ onChange, ...props }) => {
  const [value, setValue] = useState('');
  const onInput = (event) => {
    const value = props.name === 'Phone' ? event.target.value.replace(/[^0-9+() ]/g, '') : event.target.value;
    setValue(value);
    onChange(event, props.name);
  };

  return <Form.Control value={value} onChange={onInput} {...props} />;
};

const RenderInputs = ({ arrayOfAttributes, attorneySlug }) => {
  const [isNotEmptyInput, setIsNotEmpty] = useState([]);

  const handleChangeValue = (e, nameInput) => {
    const value = e.target.value;
    if (value.length === 0) setIsNotEmpty(isNotEmptyInput.filter((itemValue) => itemValue !== nameInput));
    return !isNotEmptyInput.includes(nameInput) && setIsNotEmpty([...isNotEmptyInput, nameInput]);
  };

  return (
    <>
      <input type="hidden" name="currentPage" value={`https://scarincihollenbeck.com${attorneySlug}`} />
      {arrayOfAttributes.map((attributes) => (
        <InputGroupStyled key={attributes.name}>
          <FormLabelStyled visuallyHidden={!isNotEmptyInput.includes(attributes.name)}>{attributes.name}</FormLabelStyled>
          <InputField {...attributes} onChange={(event) => handleChangeValue(event, attributes.name)} />
        </InputGroupStyled>
      ))}
      <textarea type="textarea" rows="8" cols="4" className="form-control" name="Message" placeholder="Message" rules="required|max:1000" />
    </>
  );
};

export default RenderInputs;
