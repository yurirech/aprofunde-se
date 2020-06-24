import React from 'react';

import {Container, ImageExtended, Overlay} from './custom-card-with-background.styles'
import {Link} from 'react-router-dom';

import Button from '../SharedComponents/button/button.component';

const CustomCardWithBackground = (
  { contentPadding, 
    hideOverlay, 
    backgroundImage, 
    title, 
    description, 
    route, 
    buttonBackgroungColor,
    overlayColor,
    overlayHeight
  }) => (
  
  <Container>
    <ImageExtended contentPadding={contentPadding} bg={backgroundImage} >
      <div>
        {title ? <h3>{title}</h3> : null }
        <h5>{description}</h5>
        <Link to={route}>
        <Button bgColor={buttonBackgroungColor} text='Saiba mais' />
        </Link>
      </div>
     {!hideOverlay ? <Overlay overlayColor></Overlay> : null}
    </ImageExtended>
  </Container>
);

export default CustomCardWithBackground;