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

  h1 {
    color: ${colors.aprofundeSeOrange};
    font-weight: bold;
  }

  p {
    width: ${({paragraphWidth}) => paragraphWidth || null };
    line-height: ${({paragraphLineHeight}) => paragraphLineHeight || '30px'};
    font-size: .85rem;
  }

  @media ${device.laptop} {
    margin: 4rem 0 0 0;
    width: 100%;
    text-align: center;
    min-width: unset;

    p {
      width: unset;
    }
  }  
`;

export const ImageWrapper = styled.div`
    height: ${({imageWrapperHeight}) => imageWrapperHeight || '425px' };
    width: 370px;
    box-shadow: ${({imageWrapperBoxShadow}) => imageWrapperBoxShadow || '-14px 14px 4px 3px #6e6e6e3d' };
      /* maybe #8364dd3d */
     

@media ${device.laptop} {
    box-shadow: 0px 0px 6px 4px #6e6e6e3d;
  }  
`;