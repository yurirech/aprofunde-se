import React, {Component} from 'react';
import { Content } from "./CentrilizedSectionStyled";

constCentralizedSection extends Component {

  render() {

    return (
      <Content textColor={this.props.textColor}>
        <h1>{ this.props.title }</h1>
        <p> {this.props.mainText} </p>
      </Content>
    );
  }
}

export default CentralizedSection;
