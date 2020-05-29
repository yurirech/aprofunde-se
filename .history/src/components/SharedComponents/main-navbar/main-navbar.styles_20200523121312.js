import styled from "styled-components";
import { device } from '../../../_variables'

export const Header = styled.div`
  position: ${props => props.headerAbsolute || 'unset' };
  z-index: 99;
  width: 100%;
  padding: 1.25rem 1.5rem;

  .nav-header {
    a {
      position: absolute;
      top: -16px;
      left: 90px;
    }
  }

  .navbar-nav {
    a {
      padding: 1rem;
    }
  }
  
  /* Dropdown menu */
.dropdown {
  position: relative;
  display: inline-block;
  padding
  
  &:hover {
    .dropdown-items {
      display: block;   
    }
  }
}

.dropdown-items {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  a {
    color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  }
}
  /* Dropdown menu ends */
 
 @media ${device.tablet} {
 .nav-header {
  display: flex;
  width: 100%;
  flex-direction: row-reverse;

  a {
      left: 20px;
    }
  
  
  .navbar-brand {
   display: block;
   margin-right: auto;
  }    
 }
 
 .navbar-collapse {
    width: 100%;
    text-align: left;
    transition: height 0.25s cubic-bezier(0.6, -0.28, 1, 0.58) 0s;
    
    .ml-auto {
      margin-left: unset!important;
    }
 }
 
 .navbar-expand {
    flex-direction: column;
}
  
  .navbar-expand .navbar-nav {
   flex-direction: column; 
}

  .collapse:not(.show) {
      display: none!important;
  }
  .navbar-expand .navbar-toggler {
     display: block;
    }
  } 

  @media ${device.mobileL} {
    background-color: #ffffff;
    padding: 0.5rem 0.75rem;

    .nav-header {
        a {
         top: -10px;
      }
    }
  }
`;
