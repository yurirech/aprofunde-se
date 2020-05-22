import React from 'react';
import { Title, Content, SubTitle, Overlay } from './home-header.styles'

  const HomeHeader = ({title, subTitle}) => {


    return (
      <Content className='header'>
        <Overlay className='overlay'></Overlay>
        <Title>{ title } </Title>
        <h5>HOLANDA</h5>
        <SubTitle>{ subTitle }</SubTitle>
      </Content>
    );
  }

export default HomeHeader;
// h5:first-of-type {
//   position: absolute;
//   left: 43.5%;
//   top: 49%;
//   letter-spacing: 3px;
//   color: #4F25D0;
// }