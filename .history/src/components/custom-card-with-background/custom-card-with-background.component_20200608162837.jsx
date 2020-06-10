import React from 'react';
import {Container, BackgroundImage} from './custom-card-with-background.styles'
import { FlexContainer } from '../../_styles';
import { Button } from '../SharedComponents/';

const CustomCardWithBackground = () => (
  <Container>
    <FlexContainer margin={'0'}>
      <BackgroundImage>
        <div></div>
        <h5>Entranhe-se <br/>6 dias <br/> 5 noites</h5>
        <Button title={'Saiba mais'} />
      </BackgroundImage>
    </FlexContainer>
  </Container>
);

export default CustomCardWithBackground;