import React, {Component} from 'react';
import { Title, Content, SubTitle } from './HomeHeaderStyled'
import { headerContent } from "../HomeContent";


class HomeHeader extends Component {
  render() {
    return (
      <Content className='header'>
        <Title>{headerContent.title}</Title>
        <SubTitle><span>{headerContent.title}</span> {headerContent.subTitle}</SubTitle>
      </Content>
    );
  }
}

export default HomeHeader;
