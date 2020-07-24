import React from 'react';
import {Avatar, ImageFluid} from "./AvatarPictureStyled";


const AvatarPicture = ({avatarImg}) => 
    (
      <Avatar className='flex-center'>
        <ImageFluid style={{background: 'url(' + avatarImg + ')', backgroundSize: 'cover',
          backgroundPosition: 'center' }} alt=''/>
      </Avatar>
    );

export default AvatarPicture;
