import React from 'react';
import { Title, Content, SubTitle, over } from './home-header.styles'


  const HomeHeader = ({title, subTitle}) => {


    return (
      
      <Content className='header'>
        <Overlay className='overlay'></Overlay>
        <Title>{ title } </Title>
        <SubTitle>{ subTitle }</SubTitle>
      </Content>
    );
  }

export default HomeHeader;