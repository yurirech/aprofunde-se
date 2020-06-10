import React from 'react';
import {Container, BackgroundImage} from './custom-card-with-background.styles'
import { FlexContainer } from '../../_styles';

const CustomCardWithBackground = () => (
  <Container>
    <FlexContainer margin={'0'}>
      <BackgroundImage>
        <div></div>
        <h5>Entra</h5>
      </BackgroundImage>
    </FlexContainer>
  </Container>
);

export default CustomCardWithBackground;