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
 min-width: 22rem;
 height: 23rem;
 margin: 1rem 0;
 /* display: flex;
 align-items: flex-end; */

 h4 {
   width: 20rem;
   text-align: left;
   margin-left: 2rem;
   margin-bottom: 2rem;
   margin-top: 80%;
 }
`;