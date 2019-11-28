import styled from 'styled-components';
import headerBackground from  '../../../assets/img/header-nather.png';

export const Title = styled.h1`
  font-size: 3rem;
`;

export const Content = styled.div`
  background: url(${headerBackground});
  background-position-y: -5rem;
  padding: 10%;
  background-repeat: no-repeat;
  background-size: cover;
  
  h4, h1 {
    color: white;
    text-align: left;
  }
`;

export const SubTitle = styled.h4`
  font-style: italic;
  font-weight: lighter;
`;
