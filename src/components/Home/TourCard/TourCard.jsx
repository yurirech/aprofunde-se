import React, {Component} from 'react';
import {Content} from "./TourCardStyled";
import {Button} from "react-bootstrap";

class TourCard extends Component {
  render() {
    return (
      <Content>
        {this.props.children}
        <h1> {this.props.title} <br/> {this.props.numberOfDays} </h1>
        <label>{this.props.subTitle}</label>
        <p>{this.props.mainText}</p>
        <Button variant="outline-primary">{this.props.buttonText}</Button>
      </Content>
    );
  }
}

export default TourCard;
