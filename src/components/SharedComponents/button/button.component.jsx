import React from 'react'; 
import { CustomButton } from './button.styles';


const Button = ({text, bgColor, children}) => (
                <CustomButton bgColor={bgColor}>
                  {text}
                  {children}
                </CustomButton>
);

export default Button;