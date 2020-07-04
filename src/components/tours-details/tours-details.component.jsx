import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { FlexContainerExtended, ImageWrapper, Paragraph, 
          Title, LinkDayToursBackButton, DayToursBackButton} from './tours-details.styles';
import { FlexContainer, Image } from '../../_styles';



const ToursDetails = ({title, subtitle, description, image, direction, ...otherProps}) => (
  
  <FlexContainer wrap='wrap' justify='center' direction={direction}>
    <FlexContainerExtended justify='center' column {...otherProps}>
      <LinkDayToursBackButton as={Link} to='/day-tours' {...otherProps}>
        <DayToursBackButton>
          <FontAwesomeIcon icon='arrow-left' />
        </DayToursBackButton>
      </LinkDayToursBackButton>
      <Title {...otherProps}>{title}</Title>
      { subtitle ? <label>{subtitle}</label> : null }
      <Paragraph {...otherProps}>{description}</Paragraph>
    </FlexContainerExtended>
    <ImageWrapper {...otherProps}>
      <Image bg={image} ></Image>
    </ImageWrapper>
  </FlexContainer>

);

export default ToursDetails;