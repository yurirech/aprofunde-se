import React, {Component} from 'react';
import { Title, Content, SubTitle } from './HomeHeaderStyled'



class HomeHeader extends Component {
  render() {
    return (
      <Content className='header'>
        <Title>Aprofunde-se</Title>
        <SubTitle> <span>Aprofunde-se</span> na expansão da sua própria percepção de mundo</SubTitle>
      </Content>
    );
  }
}

export default HomeHeader;
