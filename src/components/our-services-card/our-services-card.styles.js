import styled from 'styled-components';
import { FlexContainer } from '../../_styles';
import {device} from '../../_variables';

export const Content = styled.div`
  background-color: ${({contentBgColor}) => contentBgColor || null };
  padding: 2rem;
  text-align: left;
  width: 30%;
  min-width: 18rem;

  h6 {
    color: #666666;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  @media ${device.laptop} {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const FlexContainerExtended = styled(FlexContainer)`
   @media ${device.tablet} {
    /* padding: 2rem 0 */
  }
`;

