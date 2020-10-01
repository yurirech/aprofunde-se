import styled from 'styled-components/macro';

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  color: white;
`;

export const ImageHolder = styled.div`
 background: ${({tourImage}) => `url(${tourImage})` || 'blue'} no-repeat center center;
 background-size: cover;
 min-width: 17.1875rem;
 width: 33%;
 height: auto;
 margin: 1rem 0;


 h4 {
   margin-bottom: 2rem;
   margin-top: 80%;
   text-align: center;
 }
 
 @media (max-width: 1024px) {
  width: 100%;
  max-width: 25rem;
 }
`;
