import styled from "styled-components";

export const Content = styled.div`
 color: var(--aprofunde-se-orange);
  
  .btn-outline-primary {
    color: var(--aprofunde-se-orange);
    border-color: var(--aprofunde-se-orange);
    
    &:hover {
      color: white;
      border-color: white;
      background: var(--aprofunde-se-orange);
    }
  }
  
  h1, label, p, button {
    margin: 1.25rem 0;
  }
  
  label {
   font-size: 1.15rem;
  }
  
  p {
  font-size: 1.1vw;
  line-height: 2rem;
  padding: 0 15%;
  max-height: 252px;
  }
  
  h1 {
    font-size: 1.5rem;
    line-height: 2.2rem;
    font-weight: bold;
  }
`;

