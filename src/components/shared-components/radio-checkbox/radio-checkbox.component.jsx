import React from 'react';
import {Form} from "react-bootstrap";

const RadioCheckbox = ({type,label, name, id, value, onChange, checked, onClick}) => (
      <Form.Check
        custom
        type={type}
        label={label}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onClick={onClick}
        checked={checked}
      />
    );

export default RadioCheckbox;
