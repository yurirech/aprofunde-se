import React from 'react';
import {ImageHolder, Content} from './tour-option.styles'

const TourOption = ({tourOptions}) => (
  <Content>
   {tourOptions.map((tourOption, i) => 
    <ImageHolder key={i} tourImage={tourOption.tourImage} >
      <h4>{tourOption.name}</h4>
    </ImageHolder>
  )}
  </Content>
);

export default TourOption;