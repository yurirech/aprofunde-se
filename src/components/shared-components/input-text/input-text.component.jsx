import React from 'react';
import { Form } from "react-bootstrap";
import styled from "styled-components";

const FormGroup = styled(Form.Group)`
  margin: 1rem 0;
  `;

const InputText = ({controlId, type, placeholder, name, required, value, onChange, textArea}) =>  (
      <FormGroup controlId={controlId}>
        <Form.Control required={!!required} as={textArea} type={type}
                      rows={textArea === 'textarea' ? 3 : null} defaultValue={value}
                      name={name} placeholder={placeholder} onChange={onChange} />
      </FormGroup>
    );


export default InputText;
