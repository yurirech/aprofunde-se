import React from 'react'; 
import { CustomButton } from './button.styles';


const Button = ({text, bgColor, className, type, children}) => (
                <CustomButton type={type} className={className} bgColor={bgColor}>
                  {text}
                  {children}
                </CustomButton>
);

export default Button;
