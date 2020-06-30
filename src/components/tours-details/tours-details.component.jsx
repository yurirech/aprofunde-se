import React from 'react';

import { FlexContainerExtended, ImageWrapper } from './tours-details.styles';

import { FlexContainer, Image } from '../../_styles';

const ToursDetails = ({title, subtitle, description, image, direction}) => (
  <FlexContainer wrap='wrap' justify='center' direction={direction}>
    <ImageWrapper>
      <Image bg={image} ></Image>
    </ImageWrapper>
    <FlexContainerExtended justify='center' column>
      <h1>{title}</h1>
      { subtitle ? <label>{subtitle}</label> : null }
      <p>{description}</p>
    </FlexContainerExtended>
  </FlexContainer>
);

export default ToursDetails;