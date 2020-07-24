import React from "react";
import InstagramEmbed from 'react-instagram-embed';
import {FlexContainer} from "../../_styles";
import CentralizedSection from "../../components/shared-components/centrilized-section/centrilized-section.component";

const Instagram = () => (
  <div>
    <CentralizedSection title='Instagram' mainText='acesse e siga o nosso Instagram para mais novidades'/>
    <FlexContainer justify='space-around' wrap='wrap'>
      <div>
        <InstagramEmbed
          url='https://www.instagram.com/p/CAky6F3pah1/'
          maxWidth={300}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div><div>
      <InstagramEmbed
        url='https://www.instagram.com/p/CAsn69cpia0/'
        maxWidth={300}
        hideCaption={true}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div><div>
      <InstagramEmbed
        url='https://www.instagram.com/p/CAS368dDyCd/'
        maxWidth={300}
        hideCaption={true}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
    </FlexContainer>
  </div>
);

export default Instagram;
