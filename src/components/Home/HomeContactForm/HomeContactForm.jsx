import React, {Component} from 'react';
import {Form} from "react-bootstrap";
import InputText from "../../SharedComponents/InputText/InputText";
import {contactForm, formNumberOfNights, formTypeOfAccomodation, formTypeofTrip} from "../HomeContent";
import RadioOrCheckbox from "../../SharedComponents/RadioOrCheckbox/RadioOrCheckbox";
import {ContactForm} from "./HomeContactFormStyled";

class HomeContactForm extends Component {
  render() {

    let inputField = contactForm.map((content, i ) =>
      <InputText key={i} controlId={content.controlId} type={content.type} placeholder={content.placeholder} />
     );

    let numberOfNights = formNumberOfNights.map((content) =>
      <RadioOrCheckbox key={content.id} type={content.type} label={content.label} name={content.name} id={content.id} />
     );

    let typeOfTrip  = formTypeofTrip.map((content) =>
      <RadioOrCheckbox key={content.id} type={content.type} label={content.label} name={content.name} id={content.id} />
     );

    let accomodation  = formTypeOfAccomodation.map((content) =>
      <RadioOrCheckbox key={content.id} type={content.type} label={content.label} name={content.name} id={content.id} />
     );

    return (
        <ContactForm>
          { inputField }
          <p>Selecione uma opção:</p>
          { numberOfNights }
          <p>Conte-nos que tipo de viagem queres:</p>
          { typeOfTrip }
          <p>Hospedagem</p>
          { accomodation }
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control placeholder='Nos fale mais sobre como podemos te ajudar' as="textarea" rows="3" />
          </Form.Group>
        </ContactForm>
    );
  }
}

export default HomeContactForm;
