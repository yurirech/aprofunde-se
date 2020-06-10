import styled from 'styled-components';
import entranheSe from '../../assets/img/entranhe-se.jpg'
import { Image } from '../../_styles';

export const Container = styled.div`
  width: 100%;
`;

export const ImageExtended = styled.div`
  background-image: url(${entranheSe});
  background-repeat: no-repeat;
  position: relative;
  width: 29%;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

   div:first-of-type {
    z-index: 999;
    padding-top: 67%;
    padding-bottom: 7%;

    h5 {
      margin-bottom: 6%;
    }
  }

`;
export const Overlay = styled.div`
  height: 55%;
  width: 100%;
  background-color: #fff;
  opacity: .5;
  position: absolute;
  bottom: 0;
  z-index: 1
`;