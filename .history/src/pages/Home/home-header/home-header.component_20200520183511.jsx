import React from 'react';
import { Title, Content, SubTitle, Overlay } from './home-header.styles'
import { device } from "../../../_variables";

  const HomeHeader = ({title, subTitle}) => {


    return (
      <Content className='header'>
        { device.mobileL ?
          <Overlay className='overlay'></Overlay> : null
          }
        <Title>{ title } </Title>
        <SubTitle>{ subTitle }</SubTitle>
      </Content>
    );
  }

export default HomeHeader;
