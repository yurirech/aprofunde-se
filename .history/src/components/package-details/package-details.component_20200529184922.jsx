import React from 'react';

import { FlexContainerExtended, ImageWrapper } from './package-details.styles';

import { FlexContainer } from '../../_styles';

const PackageDetails = ({...props1}) => (
  <FlexContainer wrap='wrap' justify='center'>
    <ImageWrapper>
      <img src="http://www.pacificworld.com/webwp/wp-content/uploads/2016/10/06netherlands.jpg" alt=""/>
    </ImageWrapper>
    <FlexContainerExtended justify='center' column>
      <h2>{...props1}</h2>
      <small>{...props1}</small>
      <p>{...props1}</p>
    </FlexContainerExtended>
  </FlexContainer>
);

export default PackageDetails;