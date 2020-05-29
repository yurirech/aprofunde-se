import styled from 'styled-components';
import {paddings, colors} from '../../../_variables'

export const Content = styled.div`
  padding: 0 ${paddings.paddingWeb}
`;

export const Itinerary = styled.div`
  display: flex;
  justify-content: space-around;
  
  label:first-of-type {
    color: ${colors.aprofundeSeOrange};
    
  }
  P{
    width: 30%;
    text-align: left;
  }
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
`;