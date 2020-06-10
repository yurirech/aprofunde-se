import styled from 'styled-components';
import entranheSe from '../../assets/img/entranhe-se.jpg'
export const Container = styled.div`
  width: 100%;
`;
export const BackgroundImage = styled.div`
  background-image: url(${entranheSe});
  background-repeat: no-repeat;
  position: relative;
  width: 29%;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h5 {
    
  }

`;
export const Overlay = styled.div`
  height: 50%;
  width: 100%;
  background-color: black;
  opacity: .1;
  position: absolute;
  bottom: 0;
`;