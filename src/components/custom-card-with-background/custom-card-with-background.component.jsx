import React from 'react';

import {Container, ImageExtended} from './custom-card-with-background.styles'
import {Link} from 'react-router-dom';

import Button from '../shared-components/button/button.component';

const CustomCardWithBackground = (
  { contentPadding, 
    backgroundImage, 
    title, 
    description, 
    route, 
    buttonBackgroungColor,
    marginBottom,
    mobileMinWidth,
    children
  }) => (
  
  <Container marginBottom={marginBottom}>
    <ImageExtended mobileMinWidth={mobileMinWidth} contentPadding={contentPadding} bg={backgroundImage} >
      <div>
        {title ? <h3>{title}</h3> : null }
        <h5>{description}</h5>
        <Link to={route}>
        <Button bgColor={buttonBackgroungColor} text='Saiba mais' />
        </Link>
      </div>
     {children}
    </ImageExtended>
  </Container>
);

export default CustomCardWithBackground;
