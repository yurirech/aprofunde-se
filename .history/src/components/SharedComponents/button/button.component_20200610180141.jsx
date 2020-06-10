import React from 'react'; 
import { CustomButton } from './button.styles';


const Button = ({text, bgColor}) => (
<CustomButton bg>{text}</CustomButton>
);

export default Button;