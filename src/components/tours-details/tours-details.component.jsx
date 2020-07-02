import React from 'react';

import { FlexContainerExtended, ImageWrapper, Paragraph, Title } from './tours-details.styles';

import { FlexContainer, Image } from '../../_styles';

const ToursDetails = ({title, subtitle, description, image, direction, ...otherProps}) => (
  <FlexContainer wrap='wrap' justify='center' direction={direction}>
    <ImageWrapper {...otherProps}>
      <Image bg={image} ></Image>
    </ImageWrapper>
    <FlexContainerExtended justify='center' column {...otherProps}>
<<<<<<< HEAD
      <Title {...otherProps}>{title}</Title>
=======
      <h1>{title}</h1>
>>>>>>> master
      { subtitle ? <label>{subtitle}</label> : null }
      <Paragraph {...otherProps}>{description}</Paragraph>
    </FlexContainerExtended>
  </FlexContainer>
);

export default ToursDetails;