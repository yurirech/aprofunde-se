import React, {Component} from 'react';
import './HomeAboutNetherlandsStyled'
import  {aboutNetherlandsContent } from "../HomeContent";

class HomeAboutNetherlands extends Component {
  render() {
    return (
      <div>
        <h1>{aboutNetherlandsContent.title}</h1>
        <p> {aboutNetherlandsContent.subTitle}</p>
      </div>
    );
  }
}

export default HomeAboutNetherlands;
