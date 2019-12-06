import React, {Component} from 'react';
import { Title, Content, SubTitle } from './HomeHeaderStyled'


class HomeHeader extends Component {

  subTitle;

  render() {
    return (
      <Content className='header'>
        <div className='br-1rem'>
          <Title>{ this.props.title } </Title>
          <SubTitle>{ this.props.subTitle }</SubTitle>
        </div>
      </Content>
    );
  }
}

export default HomeHeader;
