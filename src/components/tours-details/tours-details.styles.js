import styled from 'styled-components/macro';

import { CustomButton } from '../../components/SharedComponents/button/button.styles';
import { FlexContainer } from '../../_styles';
import { colors, device } from '../../_variables';

export const FlexContainerExtended = styled(FlexContainer)`
  margin:  ${({dayTourStyles}) => dayTourStyles ? '0' : ' 0 0 0 2rem' };
  text-align: left;
  width: 45%;
  min-width: 25rem;
  color: ${colors.aprofundeSeBlackText};
  position: relative;

  * {
    margin-top: .75rem;
    margin-bottom: .75rem;
  }

  @media ${device.laptop} {
    margin: 0;
    width: 100%;
    text-align: center;
    min-width: unset;
  }  
`;

export const LinkDayToursBackButton = styled.a`
  position: absolute;
  left: 0;
  top: -2rem;
  margin-top: 0;
  margin-bottom: 0;
 
 @media ${device.laptop} {
    left: 0.5rem;
  }
`; 


export const DayToursBackButton = styled(CustomButton)`
  border-radius: .5rem;
  padding: .25rem;
  color: black;
  background: white;
  margin-top: 0;
  margin-bottom: 0;

  svg {
    margin: 0;
  }
`;

export const Title = styled.h1`
    color: ${colors.aprofundeSeOrange};
    font-weight: bold;
    font-size: ${({dayTourStyles}) => dayTourStyles ? '3rem' : null }
`;

export const Paragraph = styled.p`
    width: ${({dayTourStyles}) => dayTourStyles ? '84%' : null };
    line-height: ${({dayTourStyles}) => dayTourStyles ? '33px' : '30px'};

    @media ${device.laptop} {
      width: unset;
  }  
`;


export const ImageWrapper = styled.div`
    height: ${({dayTourStyles}) => dayTourStyles ? '620px' : '425px' };
    min-height: ${({dayTourStyles}) => dayTourStyles ? '620px' : null };
    width: 370px;
    box-shadow: ${({dayTourStyles}) => dayTourStyles ? '14px 14px 4px 3px #6e6e6e3d'  : '-14px 14px 4px 3px #6e6e6e3d' };
    
     

@media ${device.laptop} {
    height: 400px;
    min-height: unset;
    width: ${({dayTourStyles}) => dayTourStyles ? '100%' : '80%' };
    min-width: 310px;
    box-shadow: 0px 0px 6px 4px #6e6e6e3d;
    margin-top: ${({dayTourStyles}) => dayTourStyles ? null : '2rem' };;
  }  
`;