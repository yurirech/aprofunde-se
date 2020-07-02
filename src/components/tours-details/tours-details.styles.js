import styled from 'styled-components';

import { FlexContainer } from '../../_styles';
import { colors, device } from '../../_variables';

export const FlexContainerExtended = styled(FlexContainer)`
  margin: 0 0 0 2rem;
  text-align: left;
  width: 45%;
  min-width: 25rem;
  color: ${colors.aprofundeSeBlackText};

  * {
    margin-top: .75rem;
    margin-bottom: .75rem;
  }

  @media ${device.laptop} {
    margin: 4rem 0 0 0;
    width: 100%;
    text-align: center;
    min-width: unset;
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
    font-size: .85rem;

    @media ${device.laptop} {
      width: unset;
  }  
`;


export const ImageWrapper = styled.div`
    height: ${({dayTourStyles}) => dayTourStyles ? 'auto' : '425px' };
    width: 370px;
    box-shadow: ${({dayTourStyles}) => dayTourStyles ? '14px 14px 4px 3px #6e6e6e3d'  : '-14px 14px 4px 3px #6e6e6e3d' };
      /* maybe #8364dd3d */
     

@media ${device.laptop} {
    box-shadow: 0px 0px 6px 4px #6e6e6e3d;
  }  
`;