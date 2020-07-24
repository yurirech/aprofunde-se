import React from 'react';
import { Content } from "./centrilized-section.styles";

const CentralizedSection = ({ className, children, textColor, title, mainText}) => 
     (
      <Content textColor={textColor} className={className}>
        <h1>{title}</h1>
        {children}
        { mainText ? <p>{mainText}</p> : null }
      </Content>
    );

export default CentralizedSection;
