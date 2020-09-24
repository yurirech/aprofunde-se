import React from 'react';
import {Content} from "./tour-card.styles";
import {Button} from "react-bootstrap";

const TourCard = ({children, numberOfDays, title, mainText, buttonText}) =>
     (
      <Content>
        {children}
        <h1> {title} <br/> {numberOfDays} </h1>
        <p>{mainText}</p>
        { buttonText ?
          <Button variant="outline-primary">{buttonText}</Button> : null}
      </Content>
    );

export default TourCard;
