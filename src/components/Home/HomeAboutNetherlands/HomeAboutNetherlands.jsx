import React, {Component} from 'react';
import {Content} from "./HomeAboutNetherlandsStyled";
import  { aboutNetherlandsContent } from "../HomeContent";

class HomeAboutNetherlands extends Component {
  render() {
    return (
      <Content>
        <h1>{aboutNetherlandsContent.title}</h1>
        <p> {aboutNetherlandsContent.subTitle}</p>
      </Content>
    );
  }
}

export default HomeAboutNetherlands;
