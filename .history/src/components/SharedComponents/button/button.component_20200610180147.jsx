import React from 'react'; 
import { CustomButton } from './button.styles';


const Button = ({text, bgColor}) => (
<CustomButton bgColor={bgColor}>{text}</CustomButton>
);

export default Button;