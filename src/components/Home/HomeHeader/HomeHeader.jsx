import React from 'react';
import { Title, Content, SubTitle } from './HomeHeaderStyled'


  const HomeHeader = ({title, subTitle}) => {


    return (
      <Content className='header'>
          <Title>{ title } </Title>
          <SubTitle>{ subTitle }</SubTitle>
      </Content>
    );
  }

export default HomeHeader;
