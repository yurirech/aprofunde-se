import React from "react";

import {Content} from "./contact-us.styles";
import {FlexContainer} from "../../_styles";
import {dayTours, packagesTours, accomodation} from "./contact-us.data";

import InputText from "../../components/SharedComponents/input-text/input-text.component";
import RadioCheckbox from "../../components/SharedComponents/radio-checkbox/radio-checkbox.component";

const ContactUs = () => (
  <Content>
    <FlexContainer column>
      <h1>Entre em contato</h1>
    <form>
      <InputText type='text' controlId='name' placeholder='Nome' />
      <InputText type='email' controlId='email' placeholder='Email' />
      {
        dayTours.map((title, i) => (
              <RadioCheckbox type='checkbox' id={`day-tours-${i}`} label={title} name={title} />
            )
         )
      }
      {
        packagesTours.map((title, i) => (
              <RadioCheckbox type='radio' id={`package-${i}`} label={title} name={title} />
            )
         )
      }
      {
        packagesTours.map((title, i) => (
              <RadioCheckbox type='checkbox' id={`accommodation-${i}`} label={title} name={title} />
            )
         )
      }
      <InputText as='textarea' rows='3' type='text' controlId='numberOfPassengers' placeholder='Quantos viajantes e quantos quartos' />
      <InputText type='text' controlId='numberOfPassengers' placeholder='Quantos viajantes e quantos quartos' />
    </form>
    </FlexContainer>
  </Content>
);


export default ContactUs;

