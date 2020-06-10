import React from 'react';

import {Container, ImageExtended, Overlay} from './custom-card-with-background.styles'
import { FlexContainer } from '../../_styles';
import {v4 as uuid} from 'uuid';

import Button from '../SharedComponents/button/button.component';

const CustomCardWithBackground = ({cards}) => (
  <Container>
    <FlexContainer margin='0' justify='center'>
      {
        cards.map(card => (
          <ImageExtended bg={card.image} width='34%' key={uuid()}>
            <div>
              <h5>{card.description}</h5>
              <Button bgColor={} text={'Saiba mais'} />
            </div>
            <Overlay></Overlay>
          </ImageExtended>
        ))
      }
    </FlexContainer>
  </Container>
);

export default CustomCardWithBackground;