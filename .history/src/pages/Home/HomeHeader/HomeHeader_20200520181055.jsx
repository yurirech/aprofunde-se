import React from 'react';
import { Title, Content, SubTitle } from './HomeHeaderStyled'


  const HomeHeader = ({title, subTitle}) => {


    return (
      <Content className='header'>
          <div>
          <Title>{ title } </Title>
          <SubTitle>{ subTitle }</SubTitle>
          </div>
      </Content>
    );
  }

export default HomeHeader;
