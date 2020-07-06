import React from 'react';
import {v4 as uuid} from 'uuid';

const SimpleList = ({listItems}) => (
  <ul>
    {
      listItems.map(item => (
        <li style={{lineHeight: '2.5rem', listStyleType: 'square', color: '#666666'}} key={uuid()}>{item}</li>
      ))
    } 
  </ul>
);

export default SimpleList;