import React, {Component} from 'react';
import {Content} from "./HomeWhatWillYouSeeStyled";
import {whatWillYouSeeContent} from "../HomeContent";

class HomeWhatWillYouSee extends Component {
  render() {
    return (
      <Content>
        <div className="content-wrapper">
          <h1>{whatWillYouSeeContent.title}</h1>
          <p>{whatWillYouSeeContent.mainText}</p>
        </div>
      </Content>
    );
  }
}

export default HomeWhatWillYouSee;
