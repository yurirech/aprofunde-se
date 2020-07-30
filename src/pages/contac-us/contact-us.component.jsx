import React, {useEffect, useRef, useState} from "react";

import {Content, FormButton, HeaderTitle, SectionTitle} from "./contact-us.styles";
import {FlexContainer} from "../../_styles";
import {dayTours, packagesTours, accomodation} from "./contact-us.data";

import InputText from "../../components/shared-components/input-text/input-text.component";
import RadioCheckbox from "../../components/shared-components/radio-checkbox/radio-checkbox.component";



const ContactUs = () => {
  const [name, setName] = useState('');
  // const [email, setEmail] = useState('lalalala');
  // const firstRender = useRef(true);
  // const [disabled, setDisabled] = useState(true);
  // const [nameError, setNameError] = useState(null)

  // useEffect(() => {
  //   if (firstRender.current) {
  //     firstRender.current = false  // it's no longer the first render
  //     return; // skip the code below
  //   }
  //
  //   setDisabled( handleValidation() );
  //
  //   }, [name, email])

  // const handleValidation = () => {
  // if (name === "") {
  //   setNameError('Name can\'t be blank!');
  //   return true;
  // } else {
  //   setNameError(null)
  //   return false;
  // }
  // }

  const handleChange = (e) => {

  }

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Submitting Name ${name}`)
  }

  return (
    <Content>
      <FlexContainer column margin='4rem auto' width='50%' widthMd='80%'>
        <HeaderTitle>Entre em contato</HeaderTitle>
        <form onSubmit={handleSubmit}>
          <InputText type='text' placeholder='Nome' value={name} onChange={ e => {
            console.log(e.target.value);
            return e.target.value
          }}  />
          <InputText required type='email' controlId='email' placeholder='Email' />
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
          <FormButton type='submit'>Enviar</FormButton>
        </form>
      </FlexContainer>
    </Content>
  )
};


export default ContactUs;

