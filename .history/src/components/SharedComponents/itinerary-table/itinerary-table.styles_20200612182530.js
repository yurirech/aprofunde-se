import styled from 'styled-components';
import {paddings, colors, device} from '../../../_variables'

export const Content = styled.div`
  padding: 4rem ${paddings.paddingWeb}
`;

export const Itinerary = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem ${paddings.paddingWeb};
  
  
  label:first-of-type {
    color: ${colors.aprofundeSeOrange};
    font-weight: bold;
  }
  
  p {
    width: 35%;
    text-align: left;
  }

  p, label:last-of-type {
    color: ${colors.aprofundeSeBlackText}
  }

  @media ${device.laptop} {
    flex-direction: column;

    * {
      margin-bottom: 1rem;
    }
    
    p {
      width: 100%;
      text-align: center;
    }

  }
`;