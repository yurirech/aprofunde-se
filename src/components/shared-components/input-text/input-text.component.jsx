import React from 'react';
import { Form } from "react-bootstrap";
import styled from "styled-components";

const FormGroup = styled(Form.Group)`
  
`;

const InputText = ({controlId, type, placeholder, textArea}) =>  (
      <FormGroup controlId={controlId}>
        <Form.Control as={textArea} rows={textArea ? '3' : null} type={type} placeholder={placeholder} />
      </FormGroup>
    );


export default InputText;
