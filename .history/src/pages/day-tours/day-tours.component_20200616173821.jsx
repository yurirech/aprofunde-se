import React from 'react';

import {Content} from  './day-tours.styles';
import {FlexContainer} from '../../_styles'
import './day-tours.data';
import CentralizedSection from '../../components/SharedComponents/centrilized-section/centrilized-section.component';

const DayTours = () => (
      <Content>
        <FlexContainer justify='center'>
          <CentralizedSection title='Day Tours' >
        </FlexContainer>
      </Content>
    );

export default DayTours;