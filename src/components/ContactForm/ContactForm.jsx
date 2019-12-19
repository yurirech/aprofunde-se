import React, {Component} from 'react';
import {Button, Col, Form} from "react-bootstrap";
import InputText from "../SharedComponents/InputText/InputText";
import {contactForm, formNumberOfNights, formTypeOfAccomodation, formTypeofTrip} from "../Home/HomeContent";
import RadioOrCheckbox from "../SharedComponents/RadioOrCheckbox/RadioOrCheckbox";
import {ContactFormWrapper} from "./ContactFormStyled";

class ContactForm extends Component {
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

    let accommodation  = formTypeOfAccomodation.map((content) =>
      <RadioOrCheckbox custom key={content.id} type={content.type} label={content.label} name={content.name} id={content.id} />
     );

    return (
        <Col lg={{span: 8, offset: 2}} >
          <ContactFormWrapper>
            <h1>Entre em contato</h1>
            { inputField }
            <p>Selecione uma opção:</p>
            <Form.Group controlId="number-of-nights">
              { numberOfNights }
            </Form.Group>
            <p>Conte-nos que tipo de viagem queres:</p>
            <Form.Group controlId="type-of-trip">
              { typeOfTrip }
            </Form.Group>
            <p>Hospedagem</p>
            <Form.Group controlId="accommodation">
            { accommodation }
            </Form.Group>
            <Form.Group controlId="how-can-we-help">
              <Form.Control placeholder='Nos fale mais sobre como podemos te ajudar' as="textarea" rows="4" />
            </Form.Group>
            <div className='w-100 flex justify-content-center'>
              <Button type='submit' className='shadow-none'>Enviar</Button>
            </div>
          </ContactFormWrapper>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.472552577277!2d4.453917354516446!3d51.90708900623149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c434918a9663a5%3A0xaf1785d7e7ecf47d!2sWillem%20Buytewechstraat%20137%2C%203024%20BB%20Rotterdam%2C%20Paesi%20Bassi!5e0!3m2!1sit!2sit!4v1576172809094!5m2!1sit!2sit"
                  style={{marginBottom: '2rem'}} width='100%' height="350" frameBorder="0" title='location' allowFullScreen="" />
        </Col>
    );
  }
}

export default ContactForm;
