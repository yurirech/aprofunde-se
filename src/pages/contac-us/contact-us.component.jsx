import React from "react";

import {Content} from "./contact-us.styles";
import {FlexContainer} from "../../_styles";
import {colors} from "../../_variables";
import {dayTours, packagesTours, accomodation} from "./contact-us.data";

import InputText from "../../components/shared-components/input-text/input-text.component";
import RadioCheckbox from "../../components/shared-components/radio-checkbox/radio-checkbox.component";
import styled from "styled-components";

const SectionTitle = styled.h5`
  margin: 2.05rem 0 1rem 0;
  color: ${colors.aprofundeSeOrange};
`;

const ContactUs = () => (
  <Content>
    <FlexContainer column margin='4rem auto' width='50%' widthMd='80%'>
      <h1 style={{fontSize: '4rem', color: colors.aprofundeSeOrange}}>Entre em contato</h1>
    <form>
      <InputText type='text' controlId='name' placeholder='Nome' />
      <InputText type='email' controlId='email' placeholder='Email' />
      <SectionTitle>Day Tours</SectionTitle>
      {
        dayTours.map((title, i) => (
              <RadioCheckbox key={i} type='checkbox' id={`day-tours-${i}`} label={title} name={title} />
            )
         )
      }
      <SectionTitle>Pacotes</SectionTitle>
      {
        packagesTours.map((title, i) => (
              <RadioCheckbox key={i} type='radio' id={`package-${i}`} label={title} name='packages' />
            )
         )
      }
      <div style={{marginBottom: '2rem'}}>
        <SectionTitle last>Hospedagem</SectionTitle>
        {
          accomodation.map((title, i) => (
              <RadioCheckbox key={i} type='checkbox' id={`accommodation-${i}`} label={title} name={title} />
            )
          )
        }
      </div>
      <InputText textArea='textarea' type='text' controlId='numberOfPassengers'
                 placeholder='Nos fale mais como podemos te ajudar' />
      <InputText type='text' controlId='numberOfPassengers'
                 placeholder='Quantos viajantes e quantos quartos' />
    </form>
    </FlexContainer>
  </Content>
);


export default ContactUs;

