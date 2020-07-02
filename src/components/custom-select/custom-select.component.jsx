import React from 'react';

import { Select } from "./custom-select.styles";

const CustomSelect = ({options}) => (
  <Select name="" id="">
    {
      options.map(option => (
        <option value={option.value}>{option.option}</option>
      ))
    }
  </Select>
);

export default CustomSelect;