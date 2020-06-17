import React from 'react';

import {Container, ImageExtended, Overlay} from './custom-card-with-background.styles'
import { FlexContainer } from '../../_styles';
import {v4 as uuid} from 'uuid';

import {Link} from 'react-router-dom';

import Button from '../SharedComponents/button/button.component';

const CustomCardWithBackground = ({cards}) => (
  <Container>
    <FlexContainer margin='0' justify='center' alignMd>
      {
        cards.map(card => (
          <ImageExtended bg={card.image} width='34%' key={uuid()}>
            <div>
              <h5>{card.description}</h5>
              <Link to={card.route}>
              <Button bgColor='#000' text={'Saiba mais'} />
              </Link>
            </div>
            <Overlay></Overlay>
          </ImageExtended>
        ))
      }
    </FlexContainer>
  </Container>
);

export default CustomCardWithBackground;