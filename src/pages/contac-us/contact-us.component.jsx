import React, {useEffect, useState} from "react";
import emailjs from 'emailjs-com';
import {Redirect} from 'react-router-dom'

import {Content, FormButton, HeaderTitle, SectionTitle} from "./contact-us.styles";
import {FlexContainer} from "../../_styles";
import {dayTours, packagesTours, accommodation} from "./contact-us.data";

import InputText from "../../components/shared-components/input-text/input-text.component";
import RadioCheckbox from "../../components/shared-components/radio-checkbox/radio-checkbox.component";

const ContactUs = () => {
  const [dayToursGroup, setDayToursGroup] = useState([]);
  const [accommodations, setAccommodations] = useState([]);
  const [isSent, setIsSent] = useState(false);

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

  //Handle submit
  const handleSubmit = e => {
    e.preventDefault();

    const template_params = {
      "from_website_name": "yurirech.it",
      "from_name": e.target.name.value,
      "to_name": "Yuri",
      "email": e.target.email.value,
      "reply_to": e.target.email.value,
      "day_tours": dayToursGroup,
      "packages": e.target.packages.value,
      "accommodations": accommodations,
      "message_html": e.target.moreInfo.value,
      "number_of_travelers": e.target.numberOfTravelers.value,
    };

    emailjs.send('gmail','template_pWsS8eDz', template_params, 'user_oo9bsbo183PQuyl6penUi')
      .then((result) => {
        if(result.status === 200) {
          alert('Sua mensagem foi encaminhada com sucesso.');
          setIsSent(true);
        }
      }, (error) => {
        if(error) {
          alert('There was an unexpected error, please, contact me through the social networks\' links below');
        }
      });
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <Content>
      { isSent ? <Redirect to="/" /> : null }
      <FlexContainer column margin='4rem auto' width='50%' widthMd='80%'>
        <HeaderTitle>Entre em contato</HeaderTitle>
        <form onSubmit={handleSubmit}>
          <InputText type='text'
                     placeholder='Nome'
                     name='name'
                     onChange={ e => e.target.value }
          />

          <InputText required
                     type='email'
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
                    value={title}
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
                     onChange={e => e.target.value}
          />

         <InputText type='text'
                    name='numberOfTravelers'
                    placeholder='Quantos viajantes e quantos quartos'
                    onChange={e => e.target.value}
         />

          <FormButton type='submit'>Enviar</FormButton>
        </form>
      </FlexContainer>
    </Content>
  )
};


export default ContactUs;

