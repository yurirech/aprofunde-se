import React from 'react';

import {Content} from  './day-tours.styles';
import {FlexContainer} from '../../_styles'
import './day-tours.data';
import CentralizedSection from '../../components/SharedComponents/centrilized-section/centrilized-section.component';
import { header } from './day-tours.data';

const DayTours = () => (
      <Content>
        <FlexContainer justify='center'>
          <CentralizedSection title={header.title} mainText={header.} >
            <label>Passeios de 1 dia</label>
          </CentralizedSection>
        </FlexContainer>
      </Content>
    );

export default DayTours;