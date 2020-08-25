import styled from "styled-components";
import { device, colors } from '../../../_variables'

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
    align-items: end;
    
    a {
      padding: .25rem .5rem;
      color: ${colors.aprofundeSeBlackText} !important;
      font-size: .95rem;
    }
  }
  
  .menu-icon-mobile {
    display: none;
  }
  
  
 
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
 
 .navbar-nav {
    margin-top: 1rem;
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

.menu-icon-mobile {
  display: inline-block;
  margin-left: .25rem;
  color: ${colors.aprofundeSeOrange};
  font-size: .85rem;
}

  .collapse:not(.show) {
      display: none!important;
  }
  .navbar-expand .navbar-toggler {
     display: block;
    }
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

export const Dropdown = styled.div`
 /* Dropdown menu */
  position: relative;
  display: inline-block;
  
  a {
    padding: unset;
  }
  
  &:hover {
    .dropdown-items {
      display: block;
      animation: load .5s forwards;
    }
  }

  .dropdown-items {
      display: none;
      position: absolute;
      background-color: #fff;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      opacity: 0;
      
      
      a {
      color: black;
      padding: .75rem 1rem;
      text-decoration: none;
      display: block;
      transition: background-color .2s;
      
      &:hover {
        background-color: ${colors.aprofundeSeOrange};
        color: #fff4ed !important;
      }
    }
  }
  
  .day-tours {
    min-width: 13.75rem;
  }
  
  @keyframes load {
  100% {
    opacity: 1;
  }
}
  /* Dropdown menu ends */
  
  @media ${device.tablet} {
     /* Dropdown menu */
     padding: .2rem 0;
     
  &:hover {
      .dropdown-items {
        display: none;
        animation: unset;
      }
    }
    
    .header-dropdown {
      display: flex;
      align-items: center;
      
    }
    
    .dropdown-items {
        display: ${({displayDropdown}) => displayDropdown || 'unset' } !important;
        position: unset;
        box-shadow: unset;
        
        a {
          padding: .5rem 1rem;
          position: relative;
          margin-left: .75rem;
          
           &:hover {
          background-color: unset;
          color: unset !important;
          }
          
          &::before {
            content: '';
            position: absolute;
            width: 5px;
            height: 5px;
            background: ${colors.aprofundeSeOrange}; 
            top: 17px;
            left: -3px;
            border-radius: 50%;
          }
        }
    }
  }
`
