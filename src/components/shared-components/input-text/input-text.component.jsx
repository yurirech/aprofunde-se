import React from 'react';
import { Form } from "react-bootstrap";

const InputText = ({controlId, type, placeholder}) =>  (
      <Form.Group controlId={controlId}>
        <Form.Control type={type} placeholder={placeholder} />
      </Form.Group>
    );


export default InputText;
