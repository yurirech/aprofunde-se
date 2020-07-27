import React from 'react';
import { Form } from "react-bootstrap";
import styled from "styled-components";

const FormGroup = styled(Form.Group)`
  margin: 1rem 0;
  `;

const InputText = ({controlId, type, placeholder, textArea}) =>  (
      <FormGroup controlId={controlId}>
        <Form.Control as={textArea} type={type} rows={textArea === 'textarea' ? 3 : null} placeholder={placeholder} />
      </FormGroup>
    );


export default InputText;
