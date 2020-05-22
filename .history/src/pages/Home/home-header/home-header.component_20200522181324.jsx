import React from 'react';
import { Title, Content, SubTitle, Overlay } from './home-header.styles'

  const HomeHeader = ({title, subTitle}) => {


    return (
      <Content className='header'>
        <Overlay className='overlay'></Overlay>
        <Title>{ title } </Title>
        <h5></h5>
        <SubTitle>{ subTitle }</SubTitle>
      </Content>
    );
  }

export default HomeHeader;
