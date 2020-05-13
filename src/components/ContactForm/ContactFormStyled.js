import styled from "styled-components";
import {Form} from "react-bootstrap";
import { colors } from "../../_variables";


export const ContactFormWrapper = styled(Form)`
    margin-top: 3rem;
    background-color: ${colors.aprofundeSeOrange};
    color: white;
    text-align: left;
    margin-bottom: 4rem;
    
    h1 {
    margin-bottom: 2rem;
    }
    
    p {
      font-size: 1.25rem;
    }
    
    label {
      font-size: 1rem;
    }
      
    .btn-primary {
      color: #000000;
      background-color: white;
      border-color: white;
      padding: .65rem 2.5rem;
      margin-top: 1rem;
      
      &:hover {
        color: white;
        background-color: ${colors.aprofundeSeOrange};
        border-color: white;
      }
      
      &:not(:disabled):not(.disabled):active {
        color: ${colors.aprofundeSeOrange};
        background-color: white;
        border-color: white;
      }
     }
      
    .form-control {
      color: #fbfdff;
      background-color: ${colors.aprofundeSeOrange};
      border: 1px solid #ffffff;
      
      &:focus {
        color: #ffffff;
        background-color: ${colors.aprofundeSeOrange};
        border-color: #ffffff;
        box-shadow: 0 0 3px 0 rgba(255, 255, 255, 0.87);;
      }
      
        ::placeholder {
          color: white;
          opacity: 1; 
      }
      
        :-ms-input-placeholder { 
          color: white;
      }
      
        ::-ms-input-placeholder { 
          color: white;
      }
    }
    
    .custom-control-input:checked~.custom-control-label::before {
    color: #fff;
    border-color: #ffffff;
    background-color: #ff873d;
}
  
  .custom-control-label::before {
    border: 1px solid white;
    background-color: #ff873d;
}

.custom-control-input:focus ~ .custom-control-label::before {
    box-shadow: unset;
}
`;
