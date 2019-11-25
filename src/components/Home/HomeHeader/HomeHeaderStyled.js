import styled from 'styled-components';
import headerBackground from  '../../../assets/img/travel-pin.jpg';

export const Title = styled.h1`
  font-size: 2rem;
  color: pink;
`;

export const Content = styled.div`
  background: url(${headerBackground});
  height: 250px;
`;

export const SubTitle = styled.h4`
  span {
    color: blue;
  }
`;
