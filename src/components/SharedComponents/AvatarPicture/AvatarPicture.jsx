import React, {Component} from 'react';
import {Avatar, ImageFluid} from "./AvatarPictureStyled";


class AvatarPicture extends Component {
  avatarImg;
  render() {
    return (
      <Avatar>
        <ImageFluid style={{background: 'url(' + this.props.avatarImg + ')', backgroundSize: 'cover',
          backgroundPosition: 'center' }} alt=''/>
      </Avatar>
    );
  }
}

export default AvatarPicture;
