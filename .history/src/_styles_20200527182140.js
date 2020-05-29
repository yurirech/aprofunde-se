import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({column}) => column || null};
  flex-wrap: ${({wrap}) => wrap || null};
  justify-content: ${({justify})}
`;