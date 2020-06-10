import React from 'react';

import {Container, BackgroundImage, Overlay} from './custom-card-with-background.styles'
import { FlexContainer, Image } from '../../_styles';
import {v4 as uuid} from 'uuid';

import Button from '../SharedComponents/button/button.component';

const CustomCardWithBackground = ({cards}) => (
  <Container>
    <FlexContainer margin='0' justify='center' wrap='wrap'>
      {
        cards.map(card => (
          <BackgroundImage key={uuid()}>
            <div>
              <h5>Entranhe-se <br/>6 dias <br/> 5 noites</h5>
              <Button text={'Saiba mais'} />
            </div>
            <Overlay></Overlay>
          </BackgroundImage>
        ))
      }
    </FlexContainer>
  </Container>
);

export default CustomCardWithBackground;