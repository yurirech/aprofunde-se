import React from 'react';

import {Container, ImageExtended, Overlay} from './custom-card-with-background.styles'
import { FlexContainer } from '../../_styles';
import entranheSe from '../../assets/img/entranhe-se.jpg'
import {v4 as uuid} from 'uuid';

import Button from '../SharedComponents/button/button.component';

const CustomCardWithBackground = ({cards,}) => (
  <Container>
    <FlexContainer margin='0' justify='center' wrap='wrap'>
      {
        cards.map(card => (
          <ImageExtended bg={entranheSe} width='29%' key={uuid()}>
            <div>
              <h5>Entranhe-se <br/>6 dias <br/> 5 noites</h5>
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