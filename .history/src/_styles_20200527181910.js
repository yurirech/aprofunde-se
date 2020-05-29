import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: ${({column}) => column || null};
  flex-wrap: ${({wrap}) => wrap || null};
`;