import React from 'react';

import {Content} from  './day-tours.styles';
import {FlexContainer} from '../../_styles'
import './day-tours.data';
import CentralizedSection from '../../components/SharedComponents/centrilized-section/centrilized-section.component';
import CustomCardWithBackground from '../../components/custom-card-with-background/custom-card-with-background.component'
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
        <CustomCardWithBackground cards={cards} />
      </Content>
    );

export default DayTours;