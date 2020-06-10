import React from 'react';
import {Container, BackgroundImage, Overlay} from './custom-card-with-background.styles'
import { FlexContainer } from '../../_styles';
import Button from '../SharedComponents/button/button.component';

const CustomCardWithBackground = () => (
  <Container>
    <FlexContainer margin={'0'}>
      <BackgroundImage>
        <Overlay></Overlay>
        <h5>Entranhe-se <br/>6 dias <br/> 5 noites</h5>
        <Button text={'Saiba mais'} />
      </BackgroundImage>
    </FlexContainer>
  </Container>
);

export default CustomCardWithBackground;