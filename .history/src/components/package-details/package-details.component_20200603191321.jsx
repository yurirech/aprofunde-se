import React from 'react';

import { FlexContainerExtended, ImageWrapper } from './package-details.styles';

import { FlexContainer } from '../../_styles';

const PackageDetails = ({title, subtitle, description, image}) => (
  <FlexContainer wrap='wrap' justify='center'>
    <ImageWrapper>
      <div></div>
    </ImageWrapper>
    <FlexContainerExtended justify='center' column>
      <h2>{title}</h2>
      <label>{subtitle}</label>
      <p>{description}</p>
    </FlexContainerExtended>
  </FlexContainer>
);

export default PackageDetails;