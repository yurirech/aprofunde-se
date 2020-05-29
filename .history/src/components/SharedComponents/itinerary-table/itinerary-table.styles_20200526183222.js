import styled from 'styled-components';
import {paddings} from '../../../_variables'

export const Content = styled.div

export const Itinerary = styled.div`
  display: flex;
  justify-content: space-around;
  padding: ${paddings.paddingWeb}

  P{
    width: 30%;
    text-align: left;
  }
`;

export const Title = styled.h1``;