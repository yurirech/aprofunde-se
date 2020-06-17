import React from 'react';

import {Container, ImageExtended, Overlay} from './custom-card-with-background.styles'
import {v4 as uuid} from 'uuid';

import {Link} from 'react-router-dom';

import Button from '../SharedComponents/button/button.component';

const CustomCardWithBackground = ({bgImage, description, }) => (
  <Container>
    <ImageExtended bg={bgImage} width='34%' key={uuid()}>
      <div>
        <h5>{description}</h5>
        <Link to={route}>
        <Button bgColor='#000' text={'Saiba mais'} />
        </Link>
      </div>
      <Overlay></Overlay>
    </ImageExtended>
  </Container>
);

export default CustomCardWithBackground;