import React, {useEffect, useState} from "react";

import {Content, FormButton, HeaderTitle, SectionTitle} from "./contact-us.styles";
import {FlexContainer} from "../../_styles";
import {dayTours, packagesTours, accommodation} from "./contact-us.data";

import InputText from "../../components/shared-components/input-text/input-text.component";
import RadioCheckbox from "../../components/shared-components/radio-checkbox/radio-checkbox.component";

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [moreInfo, setMoreInfo] = useState('');
  const [packages, setPackages] = useState('');
  const [numberOfTravelers, setNumberOfTravelers] = useState('');
  const [dayToursGroup, setDayToursGroup] = useState([]);
  const [accommodations, setAccommodations] = useState([]);

  useEffect(
  () => {
    console.log(packages);
  }
  )

  const handleDayTours = e => {
  if(e.target.checked && e.target.name === 'dayTours') {
    setDayToursGroup([...dayToursGroup, e.target.value]);
  } else {
    setDayToursGroup(dayToursGroup.filter(dayTour => dayTour !== e.target.value))
  }
}

const handleAccommodation = e => {
  if(e.target.checked && e.target.name === 'accommodations') {
    setAccommodations([...accommodations, e.target.value]);
  } else {
    setAccommodations(accommodations.filter(accommodation => accommodation !== e.target.value))
  }
}


  const handleSubmit = e => {
    e.preventDefault();
    setEmail(e.target.email.value);
    setName(e.target.name.value);
    setMoreInfo(e.target.moreInfo.value);
    setPackages(e.target.packages.value);
    setNumberOfTravelers(e.target.numberOfTravelers.value);

  }

  return (
    <Content>
      <FlexContainer column margin='4rem auto' width='50%' widthMd='80%'>
        <HeaderTitle>Entre em contato</HeaderTitle>
        <form onSubmit={handleSubmit}>
          <InputText type='text'
                     placeholder='Nome'
                     value={name}
                     name='name'
                     onChange={ e => e.target.value }
          />

          <InputText required
                     type='email'
                     value={email}
                     name='email'
                     onChange={ e => e.target.value }
                     placeholder='Email'
          />

          <SectionTitle>Day Tours</SectionTitle>

            {
              dayTours.map((title, i) => (
                  <RadioCheckbox key={i}
                                 type='checkbox'
                                 id={`day-tours-${i}`}
                                 label={title}
                                 value={title}
                                 name='dayTours'
                                 onChange={ handleDayTours }
                  />
                )
              )
            }

          <SectionTitle>Pacotes</SectionTitle>

          {
            packagesTours.map((title, i) => (
                <RadioCheckbox key={i}
                               type='radio'
                               id={`package-${i}`}
                               onChange={ e => e.target.value }
                               label={title}
                               value={title}
                               name='packages'
                />
              )
            )
          }

          <div style={{marginBottom: '2rem'}}>

            <SectionTitle last>Hospedagem</SectionTitle>

            {
              accommodation.map((title, i) => (
                  <RadioCheckbox
                    key={i}
                    type='checkbox'
                    id={`accommodation-${i}`}
                    label={title}
                    value={packages}
                    name='accommodations'
                    onChange={ handleAccommodation }
                  />

                )
              )
            }
          </div>

          <InputText textArea='textarea'
                     type='text'
                     placeholder='Nos fale mais como podemos te ajudar'
                     name='moreInfo'
                     value={moreInfo}
                     onChange={e => e.target.value}
          />

         <InputText type='text'
                    name='numberOfTravelers'
                    placeholder='Quantos viajantes e quantos quartos'
                    value={numberOfTravelers}
                    onChange={e => e.target.value}
         />

          <FormButton type='submit'>Enviar</FormButton>
        </form>
      </FlexContainer>
    </Content>
  )
};


export default ContactUs;

