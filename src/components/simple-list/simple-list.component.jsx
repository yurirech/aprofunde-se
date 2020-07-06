import React from 'react';
import {v4 as uuid} from 'uuid';

const SimpleList = ({listItems}) => (
  <div>
    {
      listItems.map(item => (
        <ul key={uuid()}>
        <li>{item}</li>
        </ul>
      ))
    } 
  </div>
);

export default SimpleList;