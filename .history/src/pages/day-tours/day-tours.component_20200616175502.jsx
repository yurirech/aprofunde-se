import React from 'react';

import {Content} from  './day-tours.styles';
import {FlexContainer} from '../../_styles'
import './day-tours.data';
import CentralizedSection from '../../components/SharedComponents/centrilized-section/centrilized-section.component';
import { header } from './day-tours.data';

const cards = {

  image: `https://charlevoixquebec.files.wordpress.com/2013/03/windmill.jpg`,
  description: 'laalla',
  route: 'wehee'

}

const DayTours = () => (
      <Content>
        <FlexContainer justify='center'>
          <CentralizedSection title={header.title} mainText={header.mainText} >
            <label>{header.subtitle}</label>
          </CentralizedSection>
        </FlexContainer>
        <Cu
      </Content>
    );

export default DayTours;