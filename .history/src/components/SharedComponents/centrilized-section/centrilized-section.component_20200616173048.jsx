import React from 'react';
import { Content } from "./centrilized-section.styles";

const CentralizedSection = ({ children, textColor, title, mainText}) => 
     (
      <Content textColor={textColor}>
        <h1>{title}</h1>
        {if children}
        { mainText ? <p>{mainText}</p> : null }
      </Content>
    );

export default CentralizedSection;
