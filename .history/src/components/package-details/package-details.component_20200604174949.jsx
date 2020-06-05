import React from 'react';

import { FlexContainerExtended, ImageWrapper, Image } from './package-details.styles';

import { FlexContainer } from '../../_styles';

const PackageDetails = ({title, subtitle, description, image}) => (
  <FlexContainer wrap='wrap' justify='center'>
    <ImageWrapper>
      <Image bg={image} ></Image>
    </ImageWrapper>
    <FlexContainerExtended justify='center' column>
      <h1>{title}</h1>
      <label>{subtitle}</label>
      <p>{description}</p>
    </FlexContainerExtended>
  </FlexContainer>
);

export default PackageDetails;