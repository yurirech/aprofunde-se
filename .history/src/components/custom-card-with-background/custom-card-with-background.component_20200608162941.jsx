import React from 'react';
import {Container, BackgroundImage} from './custom-card-with-background.styles'
import { FlexContainer } from '../../_styles';
import {Button} 

const CustomCardWithBackground = () => (
  <Container>
    <FlexContainer margin={'0'}>
      <BackgroundImage>
        <div></div>
        <h5>Entranhe-se <br/>6 dias <br/> 5 noites</h5>
        <Button />
      </BackgroundImage>
    </FlexContainer>
  </Container>
);

export default CustomCardWithBackground;