import styled from 'styled-components';

import {paddings} from './_variables';

export const FlexContainer = styled.div`
  background-color: ${({color})=> }
  display: flex;
  flex-direction: ${({column}) => column ? 'column' : null};
  flex-wrap: ${({wrap}) => wrap || null};
  justify-content: ${({justify}) => justify || null};
  align-items: ${({align}) => align || null };
  padding : 0 ${paddings.paddingWeb};
  
`;