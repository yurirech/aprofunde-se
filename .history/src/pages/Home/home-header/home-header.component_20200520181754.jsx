import React from 'react';
import { Title, Content, SubTitle } from './home-header.styles'


  const HomeHeader = ({title, subTitle}) => {


    return (
      
      <Content className='header'>
      <div className='overlay'></div>
          <Title>{ title } </Title>
          <SubTitle>{ subTitle }</SubTitle>
      </Content>
    );
  }

export default HomeHeader;
