import React from "react";

import {Content} from "./contact-us.styles";
import {FlexContainer} from "../../_styles";
import {colors} from "../../_variables";
import {dayTours, packagesTours, accomodation} from "./contact-us.data";

import InputText from "../../components/shared-components/input-text/input-text.component";
import RadioCheckbox from "../../components/shared-components/radio-checkbox/radio-checkbox.component";

const ContactUs = () => (
  <Content>
    <FlexContainer column margin='4rem auto' width='50%'>
      <h1 style={{fontSize: '4rem', color: colors.aprofundeSeOrange}}>Entre em contato</h1>
    <form>
      <InputText type='text' controlId='name' placeholder='Nome' />
      <InputText type='email' controlId='email' placeholder='Email' />
      <h5>Day Tours</h5>
      {
        dayTours.map((title, i) => (

              <RadioCheckbox key={i} type='checkbox' id={`day-tours-${i}`} label={title} name={title} />
            )
         )
      }
      <h5>Pacotes</h5>
      {
        packagesTours.map((title, i) => (
              <RadioCheckbox key={i} type='radio' id={`package-${i}`} label={title} name={title} />
            )
         )
      }
      <h5>Hospedagem</h5>
      {
        accomodation.map((title, i) => (
              <RadioCheckbox key={i} type='checkbox' id={`accommodation-${i}`} label={title} name={title} />
            )
         )
      }
      <InputText textArea='textarea' type='text' controlId='numberOfPassengers'
                 placeholder='Nos fale mais como podemos te ajudar' />
      <InputText type='text' controlId='numberOfPassengers'
                 placeholder='Quantos viajantes e quantos quartos' />
    </form>
    </FlexContainer>
  </Content>
);


export default ContactUs;

