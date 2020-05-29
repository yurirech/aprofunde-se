import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({column}) => column ? 'column' : null};
  flex-wrap: ${({wrap}) => wrap || null};
  justify-content: ${({justify}) => justify || null};
  align-items: ${({align}) => align || null };
  padding : 0 paddin
  
`;