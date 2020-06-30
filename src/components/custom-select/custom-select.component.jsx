import React from 'react';

const CustomSelect = ({options}) => (
  <select name="" id="">
    {
      options.map(option => (
        <option value={option.value}>{option.option}</option>
      ))
    }
  </select>
);

export default CustomSelect;