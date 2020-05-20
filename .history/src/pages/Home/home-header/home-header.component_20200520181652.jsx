import React from 'react';
import { Title, Content, SubTitle } from './home-header.styles'


  const HomeHeader = ({title, subTitle}) => {


    return (
      <div className='overlay'>
      <Content className='header'>
          <Title>{ title } </Title>
          <SubTitle>{ subTitle }</SubTitle>
      </Content>
      </div>
    );
  }

export default HomeHeader;
