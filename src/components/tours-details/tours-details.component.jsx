import React from 'react';

import { FlexContainerExtended, ImageWrapper } from './tours-details.styles';

import { FlexContainer, Image } from '../../_styles';

const ToursDetails = ({title, subtitle, description, image, direction, ...otherProps}) => (
  <FlexContainer wrap='wrap' justify='center' direction={direction}>
    <ImageWrapper {...otherProps}>
      <Image bg={image} ></Image>
    </ImageWrapper>
    <FlexContainerExtended justify='center' column {...otherProps}>
      <h1>{title}</h1>
      { subtitle ? <label>{subtitle}</label> : null }
      <p>{description}</p>
    </FlexContainerExtended>
  </FlexContainer>
);

export default ToursDetails;