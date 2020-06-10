import styled from "styled-components";

export const Content = styled.div`
  background-color: #E8E8E8;
  padding: rem 0 2rem 0;
  
  p {
    padding: 0 15%;
  }
  
  .list {
    margin-bottom: 3.5rem;
    
    li {
      font-size: 1rem;
    }
  }
  
  .cards {
    padding: 0 7rem;
    
    h1, label, button {
      color: #000;
    }
    
    h1 {
      min-height: 70px;
    }
    
    .btn-outline-primary {
      border-color: #000;
      
      &:hover {
        background: #000;
      }
    }
  }
`;
