import React, { useState } from 'react';
import DatePicker from "react-datepicker";

const DayToursDatePicker = ({handleChange}) => {

  const [date, setDate] = useState(new Date());
 
  handleChange = date => setDate(date);

 return (
  <DatePicker selected={date} onChange={handleChange} dateFormat="dd/MM/yyyy"/>
 );
}

export default DayToursDatePicker;
  


