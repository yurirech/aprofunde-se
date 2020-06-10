import React from 'react';
import {Content} from "./custom-card-with-background";
import {Button} from "react-bootstrap";

const TourCard = ({children, numberOfDays, title, mainText, buttonText}) =>
     (
      <Content>
        {children}
        <h1> {title} <br/> {numberOfDays} </h1>
        <p>{mainText}</p>
        <Button variant="outline-primary">{buttonText}</Button>
      </Content>
    );

export default TourCard;
