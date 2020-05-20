import React from 'react';
import { Title, Content, SubTitle } from './HomeHeaderStyled'


  const HomeHeader = ({title, subTitle}) => {


    return (
      <Content className='header'>
          <div over>
          <Title>{ title } </Title>
          <SubTitle>{ subTitle }</SubTitle>
          </div>
      </Content>
    );
  }

export default HomeHeader;
