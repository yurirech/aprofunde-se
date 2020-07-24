import React from 'react';
import {Form} from "react-bootstrap";

const RadioCheckbox = ({type,label, name, id}) => (
      <Form.Check
        custom
        type={type}
        label={label}
        name={name}
        id={id}
      />
    );

export default RadioCheckbox;
