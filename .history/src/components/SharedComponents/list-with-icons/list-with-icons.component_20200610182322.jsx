import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Content} from "./list-with-icons-styles";

const ListWithIcons = ({icon, listItem})  => 
     (
      <Content className='list-with-icons'>
        <ul>
          <li>
            <FontAwesomeIcon icon={icon}/> &nbsp;
            { listItem }
          </li>
        </ul>
      </Content>
    );


export default ListWithIcons;
