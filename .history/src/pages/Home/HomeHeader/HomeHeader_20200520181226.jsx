import React from 'react';
import { Title, Content, SubTitle } from './HomeHeaderStyled'


  const HomeHeader = ({title, subTitle}) => {


    return (
      <div className='overlay'></div>
      <Content className='header'>
        
          <Title>{ title } </Title>
          <SubTitle>{ subTitle }</SubTitle>
        
      </Content>
    );
  }

export default HomeHeader;
