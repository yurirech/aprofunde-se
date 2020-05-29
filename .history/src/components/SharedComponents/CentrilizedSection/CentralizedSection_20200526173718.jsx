import React from 'react';
import { Content } from "./CentrilizedSectionStyled";

const CentralizedSection = ({text}) => 
     (
      <Content textColor={this.props.textColor}>
        <h1>{ this.props.title }</h1>
        <p> {this.props.mainText} </p>
      </Content>
    );

export default CentralizedSection;
