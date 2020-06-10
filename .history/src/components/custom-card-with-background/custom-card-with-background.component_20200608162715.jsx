import React from 'react';
import {Container, BackgroundImage} from './custom-card-with-background.styles'
import { FlexContainer } from '../../_styles';
import { CustomButton } from '../SharedComponents/button/button.styles';

const CustomCardWithBackground = () => (
  <Container>
    <FlexContainer margin={'0'}>
      <BackgroundImage>
        <div></div>
        <h5>Entranhe-se <br/>6 dias <br/> 5 noites</h5>
        <CustomButton title= />
      </BackgroundImage>
    </FlexContainer>
  </Container>
);

export default CustomCardWithBackground;