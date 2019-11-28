import React, {Component} from 'react';
import {Content} from "./HomeWhatWillYouSeeStyled";
import {whatWillYouSeeContent} from "../HomeContent";

class HomeWhatWillYouSee extends Component {
  render() {
    return (
      <Content>
        <div>
          <h3>{whatWillYouSeeContent.title}</h3>
          <p>{whatWillYouSeeContent.mainText}</p>
        </div>
      </Content>
    );
  }
}

export default HomeWhatWillYouSee;
