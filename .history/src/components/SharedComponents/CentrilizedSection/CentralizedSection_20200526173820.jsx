import React from 'react';
import { Content } from "./CentrilizedSectionStyled";

const CentralizedSection = ({textColor, title, mainText}) => 
     (
      <Content textColor={textColor}>
        <h1>{title}</h1>
        {
          <p>{mainText}</p>
        }
      </Content>
    );

export default CentralizedSection;
