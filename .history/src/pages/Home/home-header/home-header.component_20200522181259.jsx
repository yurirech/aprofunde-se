import React from 'react';
import { Title, Content, SubTitle, Overlay } from './home-header.styles'

  const HomeHeader = ({title, subTitle}) => {


    return (
      <Content className='header'>
        <Overlay className='overlay'></Overlay>
        <Title>{ title } </Title>
        <small>Holanda</small>
        <SubTitle>{ subTitle }</SubTitle>
      </Content>
    );
  }

export default HomeHeader;
