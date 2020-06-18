import React from 'react';

import './day-tours.data';

import {Content} from  './day-tours.styles';
import {FlexContainer} from '../../_styles';
import {colors} from '../../_variables';
import { header } from './day-tours.data';

import CentralizedSection from '../../components/SharedComponents/centrilized-section/centrilized-section.component';
import CustomCardWithBackground from '../../components/custom-card-with-background/custom-card-with-background.component'


const cards = [{
  image: `https://charlevoixquebec.files.wordpress.com/2013/03/windmill.jpg`,
  description: 'laalla',
  route: 'wehee'

},
{
  image: `https://charlevoixquebec.files.wordpress.com/2013/03/windmill.jpg`,
  description: 'laalla',
  route: 'wehee'

},
{
  image: `https://charlevoixquebec.files.wordpress.com/2013/03/windmill.jpg`,
  description: 'laalla',
  route: 'wehee'

},

]

const DayTours = () => (
      <Content>
        <FlexContainer justify='center'>
          <CentralizedSection title={header.title} mainText={header.mainText} >
            <label>{header.subtitle}</label>
          </CentralizedSection>
        </FlexContainer>
        <FlexContainer column>
        {
          cards.map(card => (
            <CustomCardWithBackground backgroundImage={card.image} 
                                      description={card.description} 
                                      route={card.route} 
                                      buttonBackgroungColor={colors.aprofundeSeOrange}
                                      content
                                      hideOverlay
                                      />
          ))
        }
        </FlexContainer>
        
      </Content>
    );

export default DayTours;