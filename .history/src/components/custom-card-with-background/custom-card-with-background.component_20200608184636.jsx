import React from 'react';
import {Container, BackgroundImage, Overlay} from './custom-card-with-background.styles'
import { FlexContainer } from '../../_styles';
import Button from '../SharedComponents/button/button.component';

const CustomCardWithBackground = () => (
  <Container>
    <FlexContainer margin={'0'} justify={''}>
      <BackgroundImage>
        <h5>Entranhe-se <br/>6 dias <br/> 5 noites</h5>
        <Button text={'Saiba mais'} />
        <Overlay></Overlay>
      </BackgroundImage>
      <BackgroundImage>
        <h5>Entranhe-se <br/>6 dias <br/> 5 noites</h5>
        <Button text={'Saiba mais'} />
        <Overlay></Overlay>
      </BackgroundImage>
      <BackgroundImage>
        <h5>Entranhe-se <br/>6 dias <br/> 5 noites</h5>
        <Button text={'Saiba mais'} />
        <Overlay></Overlay>
      </BackgroundImage>
    </FlexContainer>
  </Container>
);

export default CustomCardWithBackground;