import React from 'react';

import {Container, ImageExtended, Overlay} from './custom-card-with-background.styles'
import { FlexContainer } from '../../_styles';
import entranheSe from '../../assets/img/entranhe-se.jpg'
import {v4 as uuid} from 'uuid';

import Button from '../SharedComponents/button/button.component';

const CustomCardWithBackground = ({cards, image, description}) => (
  <Container>
    <FlexContainer margin='0' justify='center' wrap='wrap'>
      {
        cards.map(card => (
          <ImageExtended bg={card.image} width='29%' key={uuid()}>
            <div>
              <h5>{description}</h5>
              <Button text={'Saiba mais'} />
            </div>
            <Overlay></Overlay>
          </ImageExtended>
        ))
      }
    </FlexContainer>
  </Container>
);

export default CustomCardWithBackground;