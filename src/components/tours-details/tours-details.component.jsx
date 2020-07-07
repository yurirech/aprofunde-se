import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { FlexContainerExtended, ImageWrapper, Paragraph, 
          Title, LinkDayToursBackButton, DayToursBackButton} from './tours-details.styles';
import { FlexContainer, Image } from '../../_styles';
import SliderNoArrows from '../SharedComponents/slider-no-arrows/slider-no-arrows.component';



const ToursDetails = ({title, subtitle, description, image, direction, ...otherProps}) => (
  
  <FlexContainer wrap='wrap' justify='center' direction={direction}>
    <FlexContainerExtended justify='center' column {...otherProps}>
     { !subtitle ?
      <LinkDayToursBackButton as={Link} to='/day-tours'>
        <DayToursBackButton>
          <FontAwesomeIcon icon='arrow-left' />
        </DayToursBackButton>
      </LinkDayToursBackButton> : null
     }
      <Title {...otherProps}>{title}</Title>
      { subtitle ? <label>{subtitle}</label> : null }
      <Paragraph {...otherProps}>{description}</Paragraph>
    </FlexContainerExtended>

     {
       subtitle ? 
        <ImageWrapper {...otherProps}>
          <Image bg={image} ></Image>
        </ImageWrapper> 
        :
        <ImageWrapper {...otherProps}>
          <SliderNoArrows />
        </ImageWrapper>
     }
    
   
  </FlexContainer>
);

export default ToursDetails;