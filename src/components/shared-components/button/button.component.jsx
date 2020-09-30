import React from 'react'; 
import { CustomButton } from './button.styles';


const Button = ({text, bgColor, className, type, width, children}) => (
                <CustomButton width={width} type={type} className={className} bgColor={bgColor}>
                  {text}
                  {children}
                </CustomButton>
);

export default Button;
