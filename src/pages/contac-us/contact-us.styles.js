import styled from "styled-components";
import {colors} from "../../_variables";

export const Content = styled.div`
  text-align: left;
  
  .custom-control-input:checked~.custom-control-label::before {
      color: #fff;
      border-color: ${colors.aprofundeSeOrange};
      background-color: ${colors.aprofundeSeOrange};
    }


   input:focus, textarea:focus {
      border-color: ${colors.aprofundeSeOrange};
      box-shadow: 0px 1px 1px rgba(244,104,27,0.11) inset, 0px 0px 8px rgba(244,104,27,0.09);
   }
    
   .custom-checkbox .custom-control-input:focus ~ .custom-control-label::before {
      box-shadow: 0 0 0 1px rgba(244,104,27,0.22), 0 0 0 0.2rem rgba(244,104,27,0.22);
  }
  
    .custom-radio .custom-control-input:focus ~ .custom-control-label::before {
      box-shadow: 0 0 0 1px rgba(244,104,27,0.22), 0 0 0 0.2rem rgba(244,104,27,0.22);
  }
`;
