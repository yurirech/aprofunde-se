import React from 'react';
import { Title, Content, SubTitle, Overlay } from './home-header.styles'
import { colors, device } from "../../../_variables";

  const HomeHeader = ({title, subTitle}) => {


    return (
      <Content className='header'>
        { if(device)
          <Overlay className='overlay'></Overlay>
          }
        <Title>{ title } </Title>
        <SubTitle>{ subTitle }</SubTitle>
      </Content>
    );
  }

export default HomeHeader;
