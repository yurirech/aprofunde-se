import React from 'react';
import {Container, BackgroundImage, Overlay} from './custom-card-with-background.styles'
import { FlexContainer } from '../../_styles';
import Button from '../SharedComponents/button/button.component';

const CustomCardWithBackground = ({cards}) => (
  <Container>
    <FlexContainer margin='0' justify='center' wrap='wrap'>
      {
        cards.map(map => (
          
        ))
      }
    </FlexContainer>
  </Container>
);

export default CustomCardWithBackground;